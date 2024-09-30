import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { isValidEmail } from "@/utils/user";
import { sendOTP } from "@/utils/mailer";
import { EmailType } from "@/types/interface";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    const cleanedEmail = email.trim().replace(/\s+/g, "");
    if (!isValidEmail(cleanedEmail)) {
      return NextResponse.json(
        {
          message:
            "please provide email address in correct format e.g. abc@gmail.com",
        },
        { status: 400 }
      );
    }

    const userAvailable = await User.findOne({ email: cleanedEmail });
    if (userAvailable && userAvailable.isVerified)
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    if (userAvailable && !userAvailable.isVerified) {
      userAvailable.hashedPassword = hashedPassword;

      await userAvailable.save();

      await sendOTP({
        email: cleanedEmail,
        emailType: EmailType.VERIFY,
        userId: userAvailable.id,
      });

      return NextResponse.json(
        {
          _id: userAvailable.id,
          email: userAvailable.email,
          message: "otp has been sent",
        },
        { status: 200 }
      );
    }

    if (!userAvailable) {
      const user = await User.create({
        active: true,
        email: cleanedEmail,
        hashedPassword,
        name,
      });

      await sendOTP({
        email: cleanedEmail,
        emailType: EmailType.VERIFY,
        userId: user.id,
      });

      if (user) {
        return NextResponse.json(
          {
            _id: user.id,
            email: user.email,
            message: "otp has been sent to mail",
          },
          { status: 201 }
        );
      }
    } else {
      return NextResponse.json(
        { message: "user data is not valid" },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

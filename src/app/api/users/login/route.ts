import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const cleanedEmail = email.trim().replace(/\s+/g, "");
    const user = await User.findOne({ email: cleanedEmail });
    if (!user)
      return NextResponse.json(
        { message: "User doesnot exist" },
        { status: 400 }
      );

    if (!user.isVerified) {
      return NextResponse.json(
        { message: "user is not verified" },
        { status: 401 }
      );
    }

    const validPassword = await bcrypt.compare(password, user.hashedPassword);
    if (!validPassword)
      return NextResponse.json({ message: "Wrong password" }, { status: 401 });

    const tokenData = {
      _id: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET!, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
    return NextResponse.json(
      {
        message: "Login Successful",
        success: true,
        token: token,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}

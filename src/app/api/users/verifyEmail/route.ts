import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PUT(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { otp, userId } = reqBody;

    const user = await User.findOne({
      _id: userId,
    });

    if (!user) {
      return NextResponse.json(
        { message: "User doesnot exist" },
        { status: 400 }
      );
    }

    if (otp !== user.verifyOTP)
      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });

    if (user.verifyOTPExpiry && user.verifyOTPExpiry <= new Date()) {
      return NextResponse.json({ message: "OTP has expired" }, { status: 400 });
    }

    user.isVerified = true;
    user.verifyOTP = undefined;
    user.verifyOTPExpiry = undefined;
    await user.save();

    return NextResponse.json(
      { message: "User verified succesfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

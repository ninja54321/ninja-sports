import { NextRequest, NextResponse } from "next/server";
import Student from "@/models/studentModel";
import { connect } from "@/dbConfig/dbConfig";
import jwt from "jsonwebtoken";
import { getJwtErrorMessage } from "@/utils/getJwtErrorMessage";
import User from "@/models/userModel";

connect();
export async function PUT(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { message: "Unauthorized: No token provided" },
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1];
  const { pathname } = request.nextUrl;
  const studentId = pathname.split("/").pop();

  let decoded: any;
  try {
    decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: getJwtErrorMessage(error) || "Invalid Token",
      },
      { status: 401 }
    );
  }
  try {
    const user = await User.findById(decoded?._id);
    if (!user.isAdmin)
      return NextResponse.json(
        {
          message: "Unauthorized access. Only admin can perform this action",
        },
        { status: 401 }
      );
    const { status } = await request.json();
    const updatedStudent = await Student.findByIdAndUpdate(studentId, {
      active: status,
    });
    return NextResponse.json(
      {
        message: "Status changed successfully",
        data: updatedStudent,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

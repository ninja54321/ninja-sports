import { connect } from "@/dbConfig/dbConfig";
import Student from "@/models/studentModel";
import User from "@/models/userModel";
import { getJwtErrorMessage } from "@/utils/getJwtErrorMessage";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const student = await Student.findById(id);
    if (!student) {
      return NextResponse.json(
        {
          message: "Student Details Not Found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        data: student,
        message: "Data Found",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { message: "Unauthorized: No token provided" },
      { status: 401 }
    );
  }
  const token = authHeader.split(" ")[1];
  let decoded: any;

  try {
    decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
  } catch (error) {
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
    const formDataObject = await request.json();
    if (!formDataObject.registrationNumber) {
      return NextResponse.json(
        {
          message: "Please enter registration number",
          success: false,
        },
        { status: 400 }
      );
    }

    const { id } = params;
    // Check if student exists
    const student = await Student.findById(id);
    if (!student) {
      return NextResponse.json(
        {
          message: "Student with the given registration number does not exist",
          success: false,
        },
        { status: 404 }
      );
    }

    // Update student record
    const updatedStudent = await Student.findOneAndUpdate(
      { _id: id },
      {
        ...formDataObject,
        certificates: JSON.parse(formDataObject.certificates || "[]"),
      },
      { new: true }
    );

    return NextResponse.json(
      {
        message: "Student details updated successfully",
        success: true,
        data: updatedStudent,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { message: "Unauthorized: No token provided" },
      { status: 401 }
    );
  }
  const token = authHeader.split(" ")[1];
  let decoded: any;

  try {
    decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
  } catch (error) {
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

    const deletedStudent = await Student.findByIdAndDelete(params.id);

    if (!deletedStudent) {
      return NextResponse.json(
        { message: "Student not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Student data is deleted successfully",
        success: true,
        deletedStudent,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

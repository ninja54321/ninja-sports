import { connect } from "@/dbConfig/dbConfig";
import Student from "@/models/studentModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const registrationNumber =
      request.nextUrl.searchParams.get("registrationNumber");

    const student = await Student.find({ registrationNumber });

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
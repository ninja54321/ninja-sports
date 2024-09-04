import { connect } from "@/dbConfig/dbConfig";
import Student from "@/models/studentModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const page = parseInt(request.nextUrl.searchParams.get("page") || "1", 10);
    const limit = parseInt(
      request.nextUrl.searchParams.get("limit") || "10",
      10
    );
    // const limit = parseInt(
    //   request.nextUrl.searchParams.get("limit") || "2",
    //   10
    // );

    const skip = (page - 1) * limit;

    const students = await Student.find()
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    return NextResponse.json(
      {
        data: students,
        page,
        message: "Data Found",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching student details:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

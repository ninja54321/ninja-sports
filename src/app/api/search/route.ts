import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Student from "@/models/studentModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const type = searchParams.get("type");
    const registrationNumber = searchParams.get("registrationNumber");

    let data;
    switch (type) {
      case "student":
        data = await Student.findOne({ registrationNumber });
        break;
      default:
        console.log("default call");
        break;
    }

    if (!data) {
      return NextResponse.json(
        {
          message: "Result Not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Result found",
        success: true,
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

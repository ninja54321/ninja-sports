import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Student from "@/models/studentModel";
import { NextRequest, NextResponse } from "next/server";
import { UploadApiResponse } from "cloudinary";
import { uploadOnCloudinary } from "@/utils/cloudinary";

connect();

function sanitizeTitle(street: string) {
  // Replace spaces with underscores and remove special characters
  return street.replace(/\s+/g, "_").replace(/[^\w-]/g, "");
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.formData();
    const formDataObject = Object.fromEntries(Array.from(reqBody.entries()));
    const photo = formDataObject.photo as File;
    const buffer = Buffer.from(await photo.arrayBuffer());
    console.log(buffer);
    // let filePath;

    // const cloudinaryResponse: UploadApiResponse = uploadOnCloudinary(
    //   filePath,
    //   `students/${sanitizeTitle(formDataObject.name.toString())}`
    // );

    return NextResponse.json(
      {
        message: "Student details added successfully",
        success: true,
      },
      { status: 201 }
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

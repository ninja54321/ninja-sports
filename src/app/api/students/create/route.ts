import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Student from "@/models/studentModel";
import { NextRequest, NextResponse } from "next/server";
import { UploadApiResponse } from "cloudinary";
import { uploadOnCloudinary } from "@/utils/cloudinary";

connect();

function sanitizeTitle(street: string) {
  return street.replace(/\s+/g, "_").replace(/[^\w-]/g, "");
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.formData();
    const formDataObject = Object.fromEntries(Array.from(reqBody.entries()));
    const photo = formDataObject.photo as File;
    // const buffer = Buffer.from(await photo.arrayBuffer());
    // console.log(buffer);
    // let filePath;

    // const cloudinaryResponse: UploadApiResponse = uploadOnCloudinary(
    //   filePath,
    //   `students/${sanitizeTitle(formDataObject.name.toString())}`
    // );

    const { email, registrationNumber } = formDataObject;

    const user = await User.findOne({ email });
    const studentExists = await Student.findOne({ registrationNumber });
    if (studentExists) {
      return NextResponse.json(
        {
          message:
            "Student details already exists for the given registration number, Please add another registration Number",
          success: true,
        },
        { status: 400 }
      );
    }

    const newStudent = {
      email: email,
      active: true,
      user: user?._id || null,
      registrationNumber: formDataObject.registrationNumber,
      title: formDataObject.title,
      fullName: formDataObject.fullName,
      mobileNumber: formDataObject.mobileNumber,
      whatsAppNumber: formDataObject.whatsAppNumber,
      fatherName: formDataObject.fatherName,
      dob: formDataObject.dob,
      qualification: formDataObject.qualification,
      gender: formDataObject.gender,
      ageCategory: formDataObject.ageCategory,
      state: formDataObject.state,
      district: formDataObject.district,
      address: formDataObject.address,
      fatherOccupation: formDataObject.fatherOccupation,
    };

    const student = await Student.create(newStudent);
    console.log(student);

    return NextResponse.json(
      {
        message: "Student details added successfully",
        success: true,
      },
      { status: 201 }
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

import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Student from "@/models/studentModel";
import { NextRequest, NextResponse } from "next/server";
import { UploadApiResponse } from "cloudinary";
import { uploadImage, uploadOnCloudinary } from "@/utils/cloudinary";

connect();

function sanitizeTitle(street: string) {
  return street.replace(/\s+/g, "_").replace(/[^\w-]/g, "");
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.formData();
    const formDataObject = Object.fromEntries(Array.from(reqBody.entries()));

    if (!formDataObject.registrationNumber) {
      return NextResponse.json(
        {
          message: "Please enter registration number",
          success: true,
        },
        { status: 400 }
      );
    }

    const photo = formDataObject.photo as File;
    const cloudinaryResponse: UploadApiResponse = (await uploadImage(
      photo,
      `students/${sanitizeTitle(
        formDataObject?.registrationNumber?.toString()
      )}`
    )) as UploadApiResponse;

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
      photo: cloudinaryResponse?.secure_url.toString() || "",
    };

    const student = await Student.create(newStudent);

    return NextResponse.json(
      {
        message: "Student details added successfully",
        success: true,
        data: student,
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

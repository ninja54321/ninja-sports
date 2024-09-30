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
    // const reqBody = await request.formData();
    // const formDataObject = Object.fromEntries(Array.from(reqBody.entries()));
    const formDataObject = await request.json();

    if (!formDataObject.registrationNumber) {
      return NextResponse.json(
        {
          message: "Please enter registration number",
          success: true,
        },
        { status: 400 }
      );
    }

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

    // const photo = formDataObject.photo as File;
    // const cloudinaryResponse: UploadApiResponse = (await uploadImage(
    //   photo,
    //   `students/${sanitizeTitle(
    //     formDataObject?.registrationNumber?.toString()
    //   )}`
    // )) as UploadApiResponse;

    const updatedRegistrationNumber = formDataObject.registrationNumber
      .toString()
      .replace(/\s+/g, "");
    const newStudent = {
      email: email,
      active: true,
      user: user?._id || null,
      registrationNumber: updatedRegistrationNumber,
      title: formDataObject.title,
      fullName: formDataObject.fullName,
      mobileNumber: formDataObject.mobileNumber,
      whatsAppNumber: formDataObject.whatsAppNumber,
      fatherName: formDataObject.fatherName,
      dob: formDataObject.dob,
      qualification: formDataObject.qualification,
      gender: formDataObject.gender,
      ageCategory: formDataObject.ageCategory,
      category: formDataObject.category,
      state: formDataObject.state,
      district: formDataObject.district,
      address: formDataObject.address,
      club: formDataObject.club,
      academy: formDataObject.academy,
      school: formDataObject.school,
      // award: formDataObject.award,
      // position: formDataObject.position,
      // designation: formDataObject.designation,
      // eventVenue: formDataObject.eventVenue,
      // eventDate: formDataObject.eventDate,
      fatherOccupation: formDataObject.fatherOccupation,
      // photo: cloudinaryResponse?.secure_url.toString() || "",
      photo: formDataObject.photo,
      certificates: JSON.parse(formDataObject.certificates || "[]"),
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

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

    const events =
      typeof formDataObject.events === "string"
        ? JSON.parse(formDataObject.events || "[]")
        : [];
    // console.log(formDataObject.events, "event");
    // return;

    const newStudent = {
      active: true,
      registrationNumber: updatedRegistrationNumber,
      title: formDataObject.title,
      fullName: formDataObject.fullName,
      fatherName: formDataObject.fatherName,
      dob: formDataObject.dob,
      gender: formDataObject.gender,
      state: formDataObject.state,
      district: formDataObject.district,
      institute: formDataObject.institute,
      mobileNumber: formDataObject.mobileNumber,
      address: formDataObject.address,
      referenceCoachName: formDataObject.referenceCoachName,
      designation: formDataObject.designation,
      joiningDate: formDataObject.joiningDate,
      expiryDate: formDataObject.expiryDate,
      photo: formDataObject.photo,

      whatsAppNumber: formDataObject.whatsAppNumber,
      qualification: formDataObject.qualification,
      email: email,
      fatherOccupation: formDataObject.fatherOccupation,
      sportsExperience: formDataObject.ageCategory,
      user: user?._id || null,
      // events: JSON.parse(formDataObject.events || "[]"),
      events: formDataObject.events || [],
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
    const registrationNumber =
      request.nextUrl.searchParams.get("registrationNumber");

    const skip = (page - 1) * limit;

    let query: any = {};
    if (registrationNumber) {
      query.registrationNumber = registrationNumber;
    }

    const students = await Student.find(query)
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
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Error fetching students",
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

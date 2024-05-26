import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { UploadApiResponse } from "cloudinary";
import { uploadImage, uploadOnCloudinary } from "@/utils/cloudinary";
import National from "@/models/nationalModel";

connect();

function sanitizeTitle(street: string) {
  return street.replace(/\s+/g, "_").replace(/[^\w-]/g, "");
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.formData();
    const formDataObject = Object.fromEntries(Array.from(reqBody.entries()));

    // if (!formDataObject.registrationNumber) {
    //   return NextResponse.json(
    //     {
    //       message: "Please enter registration number",
    //       success: true,
    //     },
    //     { status: 400 }
    //   );
    // }

    const { email, registrationNumber } = formDataObject;

    const user = await User.findOne({ email });
    const detailsExist = await National.findOne({ email });
    if (detailsExist) {
      return NextResponse.json(
        {
          message: "Details already exists, Please add another  email",
          success: true,
        },
        { status: 400 }
      );
    }

    const photo = formDataObject.photo as File;
    const adharFront = formDataObject.adharFront as File;
    const adharBack = formDataObject.adharBack as File;

    // const cloudinaryResponse: UploadApiResponse = (await uploadImage(
    //   photo,
    //   `students/${sanitizeTitle(
    //     formDataObject?.email?.toString()
    //   )}`
    // )) as UploadApiResponse;

    const photoUploadPromise = uploadImage(
      photo,
      `nationals/${sanitizeTitle(formDataObject?.email.toString())}`
    ) as unknown as UploadApiResponse;
    const adharFrontUploadPromise = uploadImage(
      adharFront,
      `nationals/${sanitizeTitle(formDataObject?.email.toString())}/adhar`
    ) as unknown as UploadApiResponse;
    const adharBackUploadPromise = uploadImage(
      adharBack,
      `nationals/${sanitizeTitle(formDataObject?.email.toString())}/adhar`
    ) as unknown as UploadApiResponse;

    // Await all uploads
    const [photoResponse, adharFrontResponse, adharBackResponse] =
      await Promise.all([
        photoUploadPromise,
        adharFrontUploadPromise,
        adharBackUploadPromise,
      ]);

    const newData = {
      email: email,
      playerName: formDataObject.playerName,
      fatherName: formDataObject.fatherName,
      dob: formDataObject.dob,
      mobileNumber: formDataObject.mobileNumber,
      gender: formDataObject.gender,
      category: formDataObject.category,
      weight: formDataObject.weight.toString(),
      coachName: formDataObject.coachName,
      district: formDataObject.district,
      state: formDataObject.state,
      photo: photoResponse?.secure_url.toString() || "",
      adharFront: adharFrontResponse?.secure_url.toString() || "",
      adharBack: adharBackResponse?.secure_url.toString() || "",
    };

    const nationalDetails = await National.create(newData);

    return NextResponse.json(
      {
        message: "Details added successfully",
        success: true,
        data: nationalDetails,
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

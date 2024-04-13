import { connect } from "@/dbConfig/dbConfig";
import { isValidEmail } from "@/utils/user";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.formData();
    const formDataObject = Object.fromEntries(Array.from(reqBody.entries()));

    const { firstName, lastName, email, message, mobileNumber } =
      formDataObject;
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        {
          message: "name, email, message, mobile number fields are required",
        },
        { status: 500 }
      );
    }

    if (!isValidEmail(email.toString())) {
      return NextResponse.json(
        {
          message: "Invalid Email",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: process.env.NODEMAILER_SERVICE,
      auth: {
        user: process.env.NODEMAILER_AUTH_USER, // Replace with your email
        pass: process.env.NODEMAILER_AUTH_PASS, // Replace with your email password or an app-specific password
      },
    });

    let emailMessage = "";

    // Conditionally append the mobile number if it is present
    const name = firstName + " " + lastName;
    emailMessage += `Name: ${name} \n\n `;

    if (mobileNumber) {
      emailMessage += `Mobile Number: ${mobileNumber}\n\n`;
    }

    emailMessage += `Email: ${email} \n\n`;

    // Append the main message
    emailMessage += `Message ${message}`;

    // Create email message
    const mailOptions = {
      from: process.env.NODEMAILER_MAILOPTIONS_TO, // Replace with your email
      to: process.env.NODEMAILER_MAILOPTIONS_TO, // Replace with the recipient email
      replyTo: email.toString(),
      subject: `${name} - Query Message (Ninja Sports)`,
      text: `${emailMessage}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond to the client
    return NextResponse.json(
      {
        message: "Your message has been sent",
        success: true,
      },
      { status: 201 }
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

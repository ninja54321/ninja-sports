import nodemailer from "nodemailer";
import User from "@/models/userModel";
import { EmailType } from "@/types/interface";

export const sendOTP = async ({ userId, email, emailType }: any) => {
  try {
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Hash the OTP for storage

    const expiryTime = new Date(Date.now() + 600000); // 10 minutes in milliseconds

    if (emailType === EmailType.VERIFY) {
      await User.findByIdAndUpdate(userId, {
        verifyOTP: otp,
        verifyOTPExpiry: expiryTime,
      });
    } else if (emailType === EmailType.RESET) {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordOTP: otp,
        forgotPasswordOTPExpiry: expiryTime,
      });
    }

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: process.env.NODEMAILER_SERVICE,
      auth: {
        user: process.env.NODEMAILER_AUTH_USER, // Replace with your email
        pass: process.env.NODEMAILER_AUTH_PASS, // Replace with your email password or an app-specific password
      },
    });

    // Compose email with the OTP
    const mailOptions = {
      from: process.env.NODEMAILER_MAILOPTIONS_TO,
      to: email,
      subject:
        emailType === EmailType.VERIFY
          ? "Verify your email"
          : "Reset your password",
      html: `<p>Your Ninja Sports verification OTP is: ${otp}</p>`,
    };

    // Send the email
    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error: any) {
    throw new Error(error);
  }
};

// export const sendEmail = async ({ email, emailType, userId }: any) => {
//   try {
//     // create a hashed token
//     const hashToken = await bcrypt.hash(userId.toString(), 10);

//     if (emailType === 'VERIFY') {
//       await User.findByIdAndUpdate(userId, {
//         verifyToken: hashToken,
//         verifyTokenExpiry: Date.now() + 3600000,
//       });
//     } else if (emailType === 'RESET') {
//       await User.findByIdAndUpdate(userId, {
//         forgotPasswordToken: hashToken,
//         forgotPasswordTokenExpiry: Date.now() + 3600000,
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       service: process.env.NODEMAILER_SERVICE,
//       auth: {
//         user: process.env.NODEMAILER_AUTH_USER, // Replace with your email
//         pass: process.env.NODEMAILER_AUTH_PASS, // Replace with your email password or an app-specific password
//       },
//     });

//     const mailOptions = {
//       from: process.env.NODEMAILER_MAILOPTIONS_TO,
//       to: email,
//       subject:
//         emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',
//       html: `<p> Click <a href="http://localhost:8000/api/users/verifyemail?token=${hashToken}"> here </a> to ${
//         emailType === 'VERIFY' ? 'verify your email' : 'reset your password'
//       }

//       or copy and paste the link below in your browser.
//       <br> http://localhost:8000/api/users/verifyemail?token=${hashToken}
//       </p>
//       `,
//     };

//     const mailResponse = await transporter.sendMail(mailOptions);

//     return mailResponse;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

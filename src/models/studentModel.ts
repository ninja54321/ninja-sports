import mongoose, { Schema, Types } from "mongoose";

interface ICertificate {
  certificateNumber: string;
  certificateName: string;
  certificateLink: string;
}

const certificateSchema = new Schema<ICertificate>({
  certificateNumber: { type: String, required: true },
  certificateName: { type: String, required: true },
  certificateLink: { type: String, required: true },
});

interface IStudentDb {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  active: boolean;
  registrationNumber: string;
  fullName: string;
  mobileNumber: string;
  whatsAppNumber: string;
  fathersName: string;
  dob: Date;
  qualification: string;
  email: string;
  gender: string;
  state: string;
  district: string;
  address: string;
  fatherOccupation: string;
  sportsExperience: string;
  optionToLearn: string[];
  consent: string;
  blackCourse: boolean;
  img: string;
  starRating: string;
  title: string;
  ageCategory: string;
  certificateNumber: string;
  photo: any;
  certificates: ICertificate[];
}

const studentSchema = new Schema<IStudentDb>({
  active: { type: Boolean, required: true, default: true },
  registrationNumber: { type: String, unique: true },
  fullName: String,
  mobileNumber: String,
  whatsAppNumber: String,
  fathersName: String,
  dob: Date,
  qualification: String,
  email: String,
  gender: String,
  state: String,
  district: String,
  address: String,
  fatherOccupation: String,
  sportsExperience: String,
  optionToLearn: [{ type: String }],
  consent: String,
  blackCourse: String,
  img: String,
  starRating: String,
  title: String,
  ageCategory: String,
  photo: String,
  certificates: [certificateSchema],
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;

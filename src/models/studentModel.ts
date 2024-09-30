import mongoose, { Schema, Types } from "mongoose";

interface ICertificate {
  certificateNumber: string;
  certificateName: string;
  certificateLink: string;
  award: string;
  position: string;
  designation: string;
  eventVenue: string;
  eventDate: Date;
}

const certificateSchema = new Schema<ICertificate>({
  certificateNumber: { type: String },
  certificateName: { type: String },
  certificateLink: { type: String },
  award: { type: String },
  position: { type: String },
  designation: { type: String },
  eventVenue: { type: String },
  eventDate: { type: Date },
});

interface IStudentDb {
  _id: Types.ObjectId;
  title: string;
  registrationNumber: string;
  dob: Date;
  fullName: string;
  ageCategory: string;
  user: Types.ObjectId | null;
  fatherName: string;

  email: string;
  mobileNumber: string;
  whatsAppNumber: string;
  gender: string;
  address: string;
  fatherOccupation: string;
  active: boolean;

  qualification: string;
  state: string;
  district: string;
  sportsExperience: string;
  optionToLearn: string[];
  consent: string;
  blackCourse: boolean;
  img: string;
  starRating: string;
  category: string;
  photo: any;
  club: string;
  academy: string;
  school: string;
  certificates: ICertificate[];
}

const studentSchema = new Schema<IStudentDb>({
  active: { type: Boolean, required: true, default: true },
  registrationNumber: { type: String, unique: true },
  fullName: String,
  mobileNumber: String,
  whatsAppNumber: String,
  fatherName: String,
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
  category: String,
  photo: String,
  certificates: [certificateSchema],
  user: { type: Schema.Types.ObjectId, ref: "User" },
  club: String,
  academy: String,
  school: String,
});

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;

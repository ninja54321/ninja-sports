import axios from "axios";
import { toast } from "react-toastify";

export const fetchStudentsDetails = async (page: number, limit: number) => {
  try {
    const res = await axios.get(
      `/api/students/getDetails?page=${page}&limit=${limit}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error("Error in fetching student data", {
      autoClose: 2000,
    });
  }
};

export const fetchStudent = async (registrationNumber: string) => {
  try {
    const encodedRegistrationNumber = encodeURIComponent(registrationNumber);
    const res = await axios.get(
      `/api/students/getDetails/${encodedRegistrationNumber}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error("Error in fetching student data", {
      autoClose: 2000,
    });
  }
};

import axios from "axios";
import { toast } from "react-toastify";

export const fetchStudentDetails = async (page: number, limit: number) => {
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

import axios from "axios";
import { toast } from "react-toastify";

export const fetchStudentsDetails = async (page: number, limit: number) => {
  try {
    const res = await axios.get(
      `/api/students/details?page=${page}&limit=${limit}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error("Error in fetching student data", {
      autoClose: 2000,
    });
  }
};

export const fetchStudent = async (studentId: string) => {
  try {
    const res = await axios.get(`/api/students/details/${studentId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error("Error in fetching student data", {
      autoClose: 2000,
    });
  }
};

export const deleteStudentDetails = async (studentId: string) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`/api/students/details/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.info("Details deleted successfully");
    return res.data;
  } catch (error: any) {
    console.log(error);
    toast.error(
      error?.response?.data?.message || "Error in deleting student data",
      {
        autoClose: 2000,
      }
    );
  }
};

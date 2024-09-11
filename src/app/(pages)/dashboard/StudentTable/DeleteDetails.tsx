import { deleteStudentDetails } from "@/front-end-apis/student";
import { IconButton } from "@mui/material";
import React from "react";
import { MdDelete } from "react-icons/md";

interface IDeleteDetailsProps {
  studentId: string;
}

const DeleteDetails = ({ studentId }: IDeleteDetailsProps) => {
  const handleDelete = async (studentId: string) => {
    console.log('clicked')
    // await deleteStudentDetails(studentId);
  };
  return (
    <IconButton onClick={() => handleDelete(studentId)}>
      <MdDelete />
    </IconButton>
  );
};

export default DeleteDetails;

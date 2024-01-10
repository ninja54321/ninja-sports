"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

interface IPersonInfoCardProps {
  name: string;
  designation: string;
  text: string;
}

const textStyles = {
  fontWeight: "600",
  fontSize: {
    xs: "0.8rem",
    md: "1.1rem",
  },
};

const PersonInfoCard = ({ name, designation, text }: IPersonInfoCardProps) => {
  return (
    <Box color={"darkblue"} textAlign={"center"}>
      <Typography
        fontWeight={"700"}
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.1rem",
            md: "1.4rem",
          },
        }}
      >
        {name}
      </Typography>
      <Typography {...textStyles}>{designation}</Typography>
      <Typography {...textStyles}>{text}</Typography>
    </Box>
  );
};

export default PersonInfoCard;

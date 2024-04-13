"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

interface IContentProps {
  details: any;
}
const Content = ({ details }: IContentProps) => {
  return details ? <Box></Box> : <Typography>No result found</Typography>;
};

export default Content;

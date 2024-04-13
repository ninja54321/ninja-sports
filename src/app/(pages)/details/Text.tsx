import { Stack, Typography } from "@mui/material";
import React from "react";

interface ITextProps {
  label: string;
  value: string;
}

const Text = ({ value, label }: ITextProps) => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Typography fontWeight={700}>{label}: </Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
};

export default Text;

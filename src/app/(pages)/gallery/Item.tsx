"use client";
import { Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Item = ({ item }: any) => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          // sm: "100%",
        },
        height: {
          xs: "50vh",
          sm: "70vh",
        },
      }}
    >
      <Image
        src={item.image}
        alt="slider image"
        style={{ width: "100%", height: "100%", objectFit: "fill" }}
      />
    </Box>
  );
};

export default Item;

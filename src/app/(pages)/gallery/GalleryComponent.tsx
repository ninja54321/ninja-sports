"use client";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import PhotoSection from "./PhotoSection";
import CrouselComponent from "./Crousel";
import { sliderItems1, sliderItems2 } from "./content";

const GalleryComponent = () => {
  return (
    <Box
      textAlign="center"
      width={"100%"}
      mt={{ xs: "0.5rem", md: "4rem" }}
      mb={{
        xs: "2rem",
        md: "4rem",
      }}
    >
      <Typography
        color={"blue"}
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
          fontWeight: 500,
        }}
      >
        Our Photo Gallery
      </Typography>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <CrouselComponent data={sliderItems1} />
      </Box>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <PhotoSection />
      </Stack>
      <Box
        marginTop={"6rem"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CrouselComponent data={sliderItems2} />
      </Box>
    </Box>
  );
};

export default GalleryComponent;

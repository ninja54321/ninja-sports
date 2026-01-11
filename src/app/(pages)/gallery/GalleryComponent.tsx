"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

import PhotoSection from "./PhotoSection";
import CrouselComponent from "./Crousel";
import {
  delhiGalleryPhotos,
  martialArtChampionship2025,
  sliderItems1,
  sliderItems2,
} from "./content";

const GalleryComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const imageWrapperStyle = {
    overflow: "hidden",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  const imageStyle = {
    transition: "transform 0.3s ease",
  };

  const renderGallery = (photos: any[]) => (
    <Grid container spacing={2} justifyContent="center">
      {photos.map((photo, index) => (
        <Grid item key={index}>
          <Box sx={imageWrapperStyle} onClick={() => handleOpen(photo.image)}>
            <Image
              src={photo.image}
              alt=""
              width={300}
              height={200}
              unoptimized
              style={imageStyle}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLImageElement).style.transform =
                  "scale(1.08)")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLImageElement).style.transform =
                  "scale(1)")
              }
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box
      textAlign="center"
      width="100%"
      mt={{ xs: "0.5rem", md: "4rem" }}
      mb={{ xs: "2rem", md: "4rem" }}
    >
      <Typography
        color="blue"
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

      {/* Martial Art Championship */}
      <Box mb="4rem">
        <Typography
          variant="h4"
          color="blue"
          sx={{
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: 500,
          }}
        >
          1st National Ninja Sports Martial Art Championship 2025
        </Typography>

        {renderGallery(martialArtChampionship2025)}
      </Box>

      {/* Delhi */}
      <Box mb="4rem">
        <Typography
          variant="h4"
          color="blue"
          sx={{
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: 500,
          }}
        >
          Delhi
        </Typography>

        {renderGallery(delhiGalleryPhotos)}
      </Box>

      {/* UP */}
      <Box mb="4rem">
        <Typography
          variant="h4"
          color="blue"
          sx={{
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: 500,
          }}
        >
          UP
        </Typography>

        {renderGallery(delhiGalleryPhotos)}
      </Box>

      <Box display="flex" justifyContent="center">
        <CrouselComponent data={sliderItems1} />
      </Box>

      <Stack justifyContent="center" alignItems="center">
        <PhotoSection />
      </Stack>

      <Box mt="6rem" display="flex" justifyContent="center">
        <CrouselComponent data={sliderItems2} />
      </Box>

      {/* Image Popup */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8, zIndex: 10 }}
        >
          <CloseIcon />
        </IconButton>

        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Enlarged"
            width={900}
            height={600}
            unoptimized
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        )}
      </Dialog>
    </Box>
  );
};

export default GalleryComponent;

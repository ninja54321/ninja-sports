import { Footer, IntroSection, MidNavbar, Navbar } from "@/app/components";
import { Box } from "@mui/material";
import React from "react";
import GalleryComponent from "./GalleryComponent";

const GalleryPage = () => {
  return (
    <main
      style={{
        backgroundColor: "#82b9d1",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Box>
        <IntroSection />
      </Box>
      <Box mt={"2.4rem"}>
        <MidNavbar />
      </Box>
      <GalleryComponent />
      <Footer />
    </main>
  );
};

export default GalleryPage;

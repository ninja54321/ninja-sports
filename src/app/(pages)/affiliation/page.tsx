import React from "react";
import LogoSlider from "./LogoSlider";
import { Footer, IntroSection, MidNavbar, Navbar } from "@/app/components";
import { Box } from "@mui/material";

const Affiliation = () => {
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
      <LogoSlider />

      <Footer />
    </main>
  );
};

export default Affiliation;

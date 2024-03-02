import { Footer, IntroSection, MidNavbar, Navbar } from "@/app/components";
import { Box } from "@mui/material";
import React from "react";
import AffiliationComponent from "./AffiliationComponent";

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
      <AffiliationComponent />
      <Footer />
    </main>
  );
};

export default Affiliation;

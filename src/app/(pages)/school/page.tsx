import { IntroSection, MidNavbar, Navbar } from "@/app/components";
import { Box } from "@mui/material";
import React from "react";
import ContactText from "@/app/components/Footer/ContactText";
import SchoolTable from "./SchoolTable";

const School = () => {
  return (
    <main style={{ backgroundColor: "#82b9d1", minHeight: "100vh" }}>
      <Navbar />
      <IntroSection />
      <Box mt={"2.4rem"}>
        <MidNavbar />
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"1rem"}
      >
        <SchoolTable />
      </Box>
      <ContactText />
    </main>
  );
};

export default School;

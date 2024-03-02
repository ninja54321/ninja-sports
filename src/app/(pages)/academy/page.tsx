import { IntroSection, MidNavbar, Navbar } from "@/app/components";
import { Box } from "@mui/material";
import React from "react";
import AcademyTable from "../../components/AcademyTable";
import ContactText from "@/app/components/Footer/ContactText";

const page = () => {
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
        <AcademyTable />
      </Box>
      <ContactText />
    </main>
  );
};

export default page;

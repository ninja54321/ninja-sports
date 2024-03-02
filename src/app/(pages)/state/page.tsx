import { IntroSection, MidNavbar, Navbar } from "@/app/components";
import { Box } from "@mui/material";
import React from "react";
import StateTable from "@/app/components/StateTable/index";
import ContactText from "@/app/components/Footer/ContactText";

const State = () => {
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
        <StateTable />
      </Box>
      <ContactText />
    </main>
  );
};

export default State;

import { IntroSection, MidNavbar, Navbar } from "@/app/components";
import { Box } from "@mui/material";
import React from "react";
import styles from "./page.module.css";
import { StateTable } from "./components";

const About = () => {
  return (
    <main
      className={styles.main}
      style={{ backgroundColor: "#82b9d1", minHeight: "100vh" }}
    >
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
    </main>
  );
};

export default About;

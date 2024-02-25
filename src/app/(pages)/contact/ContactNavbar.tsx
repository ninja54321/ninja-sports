"use client";
import styles from "./styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";

const ContactNavbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Stack
        direction={"row"}
        width="90%"
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems={"center"}
      >
        <Box
          className="floatImgRight"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Image
            height={250}
            src={require("../../../helper/front-page-img/ninja-pic3.png")}
            alt="pic1"
          />
        </Box>
        <div
          data-aos="zoom-out-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className={styles.logoImg}
        >
          <Image
            height={250}
            src={require("../../../helper/main-logo.png")}
            alt="logo"
          />
        </div>

        <Box
          className="floatImgUp"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Image
            height={250}
            src={require("../../../helper/front-page-img/ninja-pic1.png")}
            alt="pic1"
          />
        </Box>
      </Stack>
      <Typography fontStyle={"italic"}
        fontWeight={"700"}
        textAlign={"center"}
        color={"red"}
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "2rem",
            md: "2.8rem",
            lg: "4rem",
          },
        }}
      >
        NINJA SPORTS MARTIAL ART
      </Typography>
    </Stack>
  );
};

export default ContactNavbar;

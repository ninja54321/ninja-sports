"use client";
import { IntroSection, MidNavbar, Navbar } from "@/app/components";
import ContactText from "@/app/components/Footer/ContactText";
import { Box, Stack } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <main style={{ backgroundColor: "#82b9d1", minHeight: "100vh" }}>
      <Navbar />
      <IntroSection />
      <Box mt={"2.4rem"}>
        <MidNavbar />
      </Box>
      <Stack
        direction={{ sx: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={4}
        gap={2}
        padding={4}
      >
        <Box>
          <Link href={"https://maps.app.goo.gl/9AEs83uE6U49EHf6A"}>
            <Image
              height={350}
              width={350}
              src={require("../../../helper/map.png")}
              alt="location"
            />
          </Link>
        </Box>
        <ContactForm />
      </Stack>
      <ContactText />
    </main>
  );
};

export default ContactUs;

"use client";
import { IntroSection, MidNavbar, Navbar } from "@/app/components";
import ContactText from "@/app/components/Footer/ContactText";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import styles from "./styles.module.css";

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
        <ContactForm />
        <Stack spacing={2}>
          <Stack
            spacing={2}
            sx={{
              backgroundColor: "#002147",
              padding: "2rem",
              borderRadius: "1rem",
            }}
          >
            <Typography color={"white"}>Contact Info</Typography>
            <Stack spacing={2}>
              <Stack direction={"row"} spacing={2}>
                <Link href={"https://maps.app.goo.gl/9AEs83uE6U49EHf6A"}>
                  <GoLocation
                    fontSize={"1.2rem"}
                    color="white"
                    className={styles.socialMedia}
                  />
                </Link>
                <Typography color={"white"}>
                  A-894 NO-20, SONIA VIHAR DELHI NORTH EAST DELHI-110094
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <MdOutlineEmail
                  fontSize={"1.2rem"}
                  color="white"
                  className={styles.socialMedia}
                />
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <FaPhoneAlt
                  fontSize={"1.2rem"}
                  color="white"
                  className={styles.socialMedia}
                />
                <Typography color={"white"}>+91 88605 29344</Typography>
              </Stack>
            </Stack>

            <Stack direction={"row"} spacing={2}>
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=61553954444474&mibextid=ZbWKwL"
                }
                style={{ textDecoration: "none" }}
              >
                <FaFacebookF
                  fontSize={"1.6rem"}
                  className={styles.socialMedia}
                />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/ninjasportssgfi?igsh=MTZ0Zmp6bDg0azM2NA=="
                }
                style={{ textDecoration: "none" }}
              >
                <FaInstagram
                  fontSize={"1.6rem"}
                  className={styles.socialMedia}
                />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/ninja-sports-martial-art-school-games-federation-of-india-a991662b2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
                style={{ textDecoration: "none" }}
              >
                <BiLogoLinkedinSquare
                  fontSize={"1.6rem"}
                  className={styles.socialMedia}
                />
              </Link>
              <Link
                href={
                  "https://twitter.com/i/flow/login?redirect_after_login=%2FNinjaSportssgfi"
                }
                style={{ textDecoration: "none" }}
              >
                <FaTwitter fontSize={"1.6rem"} className={styles.socialMedia} />
              </Link>
              <Link
                href={"https://www.youtube.com/watch?v=P8xYIJG9xGU"}
                style={{ textDecoration: "none" }}
              >
                <FaYoutube fontSize={"1.6rem"} className={styles.socialMedia} />
              </Link>
            </Stack>
          </Stack>
          {/* <ContactText /> */}
          <Link href={"https://maps.app.goo.gl/9AEs83uE6U49EHf6A"}>
            <Image
              height={350}
              style={{width: '100%', borderRadius: '1rem'}}
              src={require("../../../helper/map.png")}
              alt="location"
            />
          </Link>
        </Stack>
      </Stack>
    </main>
  );
};

export default ContactUs;

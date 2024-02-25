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
import { SiWhatsapp } from "react-icons/si";
import ContactNavbar from "./ContactNavbar";

const ContactUs = () => {
  return (
    <main
      style={{
        backgroundColor: "#82b9d1",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />
      {/* <IntroSection /> */}
      <ContactNavbar />
      <Box mt={"2.4rem"}>
        <MidNavbar />
      </Box>
      <Stack
        width={"100vw"}
        direction={{ sx: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={4}
        gap={2}
        padding={4}
      >
        <Box
          width={{
            xs: "100%",
            sm: "80%",
            md: "auto",
          }}
        >
          <ContactForm />
        </Box>
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
                    color="#CD201F"
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
                  color="#CD201F"
                  className={styles.socialMedia}
                />
              </Stack>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
                spacing={2}
              >
                <FaPhoneAlt
                  fontSize={"1.2rem"}
                  color="#34A853"
                  className={styles.socialMedia}
                />
                <Stack>
                  <Typography fontSize={"0.8rem"} color={"white"}>
                    Head office number
                  </Typography>
                  <Typography fontSize={"0.8rem"} color={"white"}>
                    01169261710
                  </Typography>
                </Stack>
                <Stack>
                  <Typography fontSize={"0.8rem"} color={"white"}>
                    Mr: Sanjay Chaudhary
                  </Typography>
                  <Typography fontSize={"0.8rem"} color={"white"}>
                    8650005330
                  </Typography>
                </Stack>
                <Stack>
                  <Typography fontSize={"0.8rem"} color={"white"}>
                    Mr: I.S Chauhan general secretary
                  </Typography>
                  <Typography fontSize={"0.8rem"} color={"white"}>
                    8860529344
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack direction={"row"} spacing={2}>
              <Link
                href={
                  "https://www.facebook.com/profile.php?id=61553954444474&mibextid=ZbWKwL"
                }
                style={{ textDecoration: "none" }}
              >
                <FaFacebookF color="#316FF6"
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
                <FaInstagram color="#ee2a7b"
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
                <BiLogoLinkedinSquare color="#0A66C2"
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
                <FaTwitter color="#1DA1F2" fontSize={"1.6rem"} className={styles.socialMedia} />
              </Link>
              <Link
                href={"https://www.youtube.com/watch?v=P8xYIJG9xGU"}
                style={{ textDecoration: "none" }}
              >
                <FaYoutube color="#CD201F" fontSize={"1.6rem"} className={styles.socialMedia} />
              </Link>
              <Link
                href={"http://wame.pro/1i15pe"}
                style={{ textDecoration: "none" }}
              >
                <SiWhatsapp color="#059e2b"
                  fontSize={"1.6rem"}
                  className={styles.socialMedia}
                />
              </Link>
            </Stack>
          </Stack>
          {/* <ContactText /> */}
          <Link href={"https://maps.app.goo.gl/9AEs83uE6U49EHf6A"}>
            <Image
              height={350}
              style={{ width: "100%", borderRadius: "1rem" }}
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

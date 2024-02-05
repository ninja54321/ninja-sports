"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./contact.module.css";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";

const ContactText = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box>
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Image
          height={35}
          src={require("../../../helper/footer/map-marker.png")}
          alt="map-marker"
        />
        <Typography
          fontWeight={"600"}
          sx={{
            wordWrap: "break-word",
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem",
            },
          }}
        >
          A-894 NO-20, SONIA VIHAR DELHI NORTH EAST DELHI-110094
        </Typography>
      </Box> */}

      <Box
        marginTop={"1rem"}
        display={"flex"}
        gap={{ xs: "0.8rem", sm: "2rem" }}
        justifyContent={"center"}
        flexWrap={"wrap"}
        padding={1}
      >
        {/* <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <CallTwoToneIcon
            sx={{
              wordWrap: "break-word",
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
              },
            }}
          />
          <Typography
            sx={{
              wordWrap: "break-word",
              fontSize: {
                fontWeight: "600",
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
              },
            }}
          >
            01169261710
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <LanguageTwoToneIcon
            color="primary"
            sx={{
              wordWrap: "break-word",
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
              },
            }}
          />
          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: "600",
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
              },
            }}
          >
            www.ninjasportssgfi.com
          </Typography>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <EmailTwoToneIcon
            color="primary"
            sx={{
              wordWrap: "break-word",
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
              },
            }}
          />
          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: "600",
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
              },
            }}
          >
            is@ninjasportssgfi.com
          </Typography>
        </Box> */}

        {/* <Icon
          className={styles.socialMedia}
          size={1.2}
          path={mdiEmail}
        /> */}
        <Link href={"#"} style={{ textDecoration: "none" }}>
          <MdOutlineMail className={styles.socialMedia} />
        </Link>
        <Link
          href={
            "https://www.facebook.com/profile.php?id=61553954444474&mibextid=ZbWKwL"
          }
          style={{ textDecoration: "none" }}
        >
          <FaFacebookF className={styles.socialMedia} />
        </Link>
        <Link
          href={
            "https://www.instagram.com/ninjasportssgfi?igsh=MTZ0Zmp6bDg0azM2NA=="
          }
          style={{ textDecoration: "none" }}
        >
          <FaInstagram className={styles.socialMedia} />
        </Link>
        <Link
          href={
            "https://www.linkedin.com/in/ninja-sports-martial-art-school-games-federation-of-india-a991662b2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          style={{ textDecoration: "none" }}
        >
          <BiLogoLinkedinSquare className={styles.socialMedia} />
        </Link>
        <Link
          href={
            "https://twitter.com/i/flow/login?redirect_after_login=%2FNinjaSportssgfi"
          }
          style={{ textDecoration: "none" }}
        >
          <FaTwitter className={styles.socialMedia} />
        </Link>
        <Link
          href={"https://www.youtube.com/watch?v=P8xYIJG9xGU"}
          style={{ textDecoration: "none" }}
        >
          <FaYoutube className={styles.socialMedia} />
        </Link>
        <Link
          href={"http://wame.pro/1i15pe"}
          style={{ textDecoration: "none" }}
        >
          <SiWhatsapp className={styles.socialMedia} />
        </Link>
      </Box>
    </Box>
  );
};

export default ContactText;

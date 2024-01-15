import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const MidNavbar = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        backgroundColor: "#002147",
        height: "5rem",
      }}
    >
      <Stack
        direction="row"
        justifyContent={"space-evenly"}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        alignItems={"center"}
        sx={{ height: "100%" }}
      >
        <Link className={styles.navItem} href={"/"}>
          <Typography
            sx={{
              transition: "font-size 0.3s ease-in-out",
              "&:hover": {
                fontSize: "1.1em",
              },
            }}
          >
            Home
          </Typography>
        </Link>
        <Link className={styles.navItem} href={"/"}>
          <Typography
            sx={{
              transition: "font-size 0.3s ease-in-out",
              "&:hover": {
                fontSize: "1.1em",
              },
            }}
          >
            Gallery
          </Typography>
        </Link>
        <Link className={styles.navItem} href={"/"}>
          <Typography
            sx={{
              transition: "font-size 0.3s ease-in-out",
              "&:hover": {
                fontSize: "1.1em",
              },
            }}
          >
            Event & Updates
          </Typography>
        </Link>
        <Link className={styles.navItem} href={"/"}>
          <Typography
            sx={{
              transition: "font-size 0.3s ease-in-out",
              "&:hover": {
                fontSize: "1.1em",
              },
            }}
          >
            Contact Us
          </Typography>
        </Link>
      </Stack>
    </Box>
  );
};

export default MidNavbar;

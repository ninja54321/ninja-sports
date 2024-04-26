"use client";
import { Box, Divider, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Icon from "@mdi/react";
import { mdiMenuDown } from "@mdi/js";
import SearchBar from "./SearchBar";

const MidNavbar = () => {
  const user =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [affiliatedAnchorEl, setAffiliatedAnchorEl] = React.useState(null);
  const [contactAnchorEl, setContactAnchorEl] = React.useState(null);

  const handleContactClick = (event: any) => {
    setContactAnchorEl(event.currentTarget);
  };

  const handleContactClose = (event: any) => {
    setContactAnchorEl(null);
  };

  const handleAffiliatedClick = (event: any) => {
    setAffiliatedAnchorEl(event.currentTarget);
  };

  const handleAffiliatedClose = () => {
    setAffiliatedAnchorEl(null);
  };
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
        <Link className={styles.navItem} href={"/gallery"}>
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
        <div
          onMouseEnter={handleContactClick}
          onMouseLeave={handleContactClose}
        >
          <Typography
            className={styles.navItem}
            sx={{
              transition: "font-size 0.3s ease-in-out",
              "&:hover": {
                fontSize: "1.1em",
              },
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Registration <Icon path={mdiMenuDown} size={1} />
          </Typography>
          {/* </Link> */}
          <Menu
            id="basic-menu"
            anchorEl={contactAnchorEl}
            open={Boolean(contactAnchorEl)}
            onClose={handleContactClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              style: {
                backgroundColor: "#002147",
                color: "white",
                gap: 2,
              },
            }}
          >
            {/* <Link className={styles.navItem} href={"/contact"}>
              <MenuItem>Contact Page</MenuItem>
            </Link> */}
            <Link
              href={"https://forms.gle/651PyYNX3fnc61ydA"}
              className={styles.navItem}
              target="_blank"
            >
              <MenuItem>
                <Typography>Admission</Typography>
              </MenuItem>
            </Link>
            <Link
              href={"https://forms.gle/eLsWh2MYYMqTkJ4Y9"}
              target="_blank"
              className={styles.navItem}
            >
              <MenuItem className={styles.navItem}>Affiliation</MenuItem>
            </Link>
            <Link
              href={"https://forms.gle/7SW692CVHoYcFD3j8"}
              target="_blank"
              className={styles.navItem}
            >
              <MenuItem>Membership</MenuItem>
            </Link>
            <Link
              className={styles.navItem}
              target="_blank"
              href={"https://forms.gle/7daxiG4rT66VFJrcA"}
            >
              <MenuItem className={styles.navItem}>Referee</MenuItem>
            </Link>
            <Link
              href={"https://forms.gle/jNFPJjhwKXucuGhb6"}
              target="_blank"
              className={styles.navItem}
            >
              <MenuItem>Training Camp</MenuItem>
            </Link>
            <Link
              href={"https://forms.gle/gABrL3uYSV5G1ySr6"}
              target="_blank"
              className={styles.navItem}
            >
              <MenuItem>Belt Greeting</MenuItem>
            </Link>
            <Link
              href={"https://forms.gle/DNFMEwKiZ9evNoSDA"}
              className={styles.navItem}
              target="_blank"
            >
              <MenuItem>National</MenuItem>
            </Link>
          </Menu>
        </div>

        {/* <Link className={styles.navItem} href={"/"}>
          <Typography
            sx={{
              transition: "font-size 0.3s ease-in-out",
              "&:hover": {
                fontSize: "1.1em",
              },
            }}
          >
            Governing Body
          </Typography>
        </Link> */}
        <Link className={styles.navItem} href={"/events"}>
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
        {/* <Link className={styles.navItem} href={"/"}> */}
        <div
          onMouseEnter={handleAffiliatedClick}
          onMouseLeave={handleAffiliatedClose}
        >
          <Typography
            className={styles.navItem}
            sx={{
              transition: "font-size 0.3s ease-in-out",
              "&:hover": {
                fontSize: "1.1em",
              },
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Affiliated <Icon path={mdiMenuDown} size={1} />
          </Typography>
          {/* </Link> */}
          <Menu
            id="basic-menu"
            anchorEl={affiliatedAnchorEl}
            open={Boolean(affiliatedAnchorEl)}
            onClose={handleAffiliatedClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              style: {
                backgroundColor: "#002147",
                color: "white",
                gap: 2,
              },
            }}
          >
            <Link href={"/"} className={styles.navItem}>
              <MenuItem>Governing Body</MenuItem>
            </Link>
            <Link href={"/state"} className={styles.navItem}>
              <MenuItem>
                <Typography>State</Typography>
              </MenuItem>
            </Link>
            <MenuItem className={styles.navItem}>Club</MenuItem>
            <Link href={"/academy"} className={styles.navItem}>
              <MenuItem>Academy</MenuItem>
            </Link>
            <Link className={styles.navItem} href={"/school"}>
              <MenuItem className={styles.navItem}>School</MenuItem>
            </Link>
            <Link href={"/affiliation"} className={styles.navItem}>
              <MenuItem>Affiliation</MenuItem>
            </Link>
          </Menu>
        </div>
        <Link className={styles.navItem} href={"/contact"}>
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
        {!user && (
          <Link className={styles.navItem} href={"/signup"}>
            <Typography
              sx={{
                transition: "font-size 0.3s ease-in-out",
                "&:hover": {
                  fontSize: "1.1em",
                },
              }}
            >
              Signup
            </Typography>
          </Link>
        )}
        {!user && (
          <Link className={styles.navItem} href={"/login"}>
            <Typography
              sx={{
                transition: "font-size 0.3s ease-in-out",
                "&:hover": {
                  fontSize: "1.1em",
                },
              }}
            >
              Login
            </Typography>
          </Link>
        )}
        {user && (
          <Stack direction="row" alignItems={"center"} spacing={4}>
            <SearchBar />
            <Stack
              className={styles.navItem}
              onClick={() => localStorage.removeItem("token")}
            >
              <Typography
                sx={{
                  transition: "font-size 0.3s ease-in-out",
                  "&:hover": {
                    fontSize: "1.1em",
                    cursor: "pointer",
                  },
                }}
              >
                Logout
              </Typography>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default MidNavbar;

"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "./navbar.module.css";
import { Stack } from "@mui/material";
import Link from "next/link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  "Home",
  "Gallery",
  "Affiliation",
  "Event & Update",
  "Contact US",
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const logoImg = require("../../../helper/logo/logo-bg-remove.png");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      color={"transparent"}
      sx={{ boxShadow: "none", padding: "2rem" }}
    >
      <Link href={"/"}>
        <Image priority src={logoImg} alt="logo" height={50} />
      </Link>

      <Divider />
      <List>
        <Stack direction="column" spacing={2} marginTop={"2rem"}>
          <Link className={styles.navItemDrawer} href={"/"}>
            <Typography>Home</Typography>
          </Link>
          <Link className={styles.navItemDrawer} href={"/gallery"}>
            <Typography>Gallery</Typography>
          </Link>
          <Link className={styles.navItemDrawer} href={"/"}>
            <Typography>Governing Body</Typography>
          </Link>
          <Link className={styles.navItemDrawer} href={"/events"}>
            <Typography>Event & Updates</Typography>
          </Link>
          <Link className={styles.navItemDrawer} href={"/contact"}>
            <Typography>Contact Us</Typography>
          </Link>
          {/* <Link className={styles.navItemDrawer} href={"/"}> */}
          <Typography className={styles.navItemDrawer} fontWeight={700}>
            Affiliated
          </Typography>

          <Stack spacing={1} paddingLeft={"2rem"}>
            <Link href={"/state"} className={styles.navItemDrawer}>
              <Typography>State</Typography>
            </Link>

            <Link href={"/"} className={styles.navItemDrawer}>
              <Typography>Club</Typography>
            </Link>

            <Link href={"/academy"} className={styles.navItemDrawer}>
              <Typography>Academy</Typography>
            </Link>

            <Link href={"/"} className={styles.navItemDrawer}>
              <Typography>School</Typography>
            </Link>

            <Link href={"/affiliation"} className={styles.navItemDrawer}>
              <Typography>Affiliation</Typography>
            </Link>
          </Stack>

          <Typography className={styles.navItemDrawer} fontWeight={700}>
            Registration
          </Typography>

          <Stack spacing={1} paddingLeft={"2rem"}>
            {/* <Link href={"/contact"} className={styles.navItemDrawer}>
              <Typography>Contact Page</Typography>
            </Link> */}

            <Link
              href={"https://forms.gle/651PyYNX3fnc61ydA"}
              className={styles.navItemDrawer}
              target="_blank"
            >
              <Typography>Admission</Typography>
            </Link>

            <Link
              className={styles.navItemDrawer}
              href={"https://forms.gle/eLsWh2MYYMqTkJ4Y9"}
              target="_blank"
            >
              <Typography>Affiliation</Typography>
            </Link>

            <Link
              href={"https://forms.gle/7SW692CVHoYcFD3j8"}
              className={styles.navItemDrawer}
              target="_blank"
            >
              <Typography>Membership</Typography>
            </Link>

            <Link
              href={"https://forms.gle/7daxiG4rT66VFJrcA"}
              className={styles.navItemDrawer}
              target="_blank"
            >
              <Typography>Referee</Typography>
            </Link>

            <Link
              href={"https://forms.gle/jNFPJjhwKXucuGhb6"}
              target="_blank"
              className={styles.navItemDrawer}
            >
              <Typography>Training Camp</Typography>
            </Link>

            <Link
              href={"https://forms.gle/gABrL3uYSV5G1ySr6"}
              className={styles.navItemDrawer}
              target="_blank"
            >
              <Typography>Belt Greeting</Typography>
            </Link>

            <Link
              href={"/nationalRegistration"}
              target="_blank"
              className={styles.navItemDrawer}
            >
              <Typography>National</Typography>
            </Link>
          </Stack>

          {/* </Link> */}
          {/* <Link className={styles.navItemDrawer} href={"/contact"}>
            <Typography>Contact Us</Typography>
          </Link> */}
        </Stack>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="relative"
        elevation={0}
        component="nav"
        sx={{ backgroundColor: "transparent" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Link href={"/"}>
              <Image priority src={logoImg} alt="logo" height={90} />
            </Link>
          </Box> */}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* <Stack
              direction="row"
              justifyContent={'space-evenly'}
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
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
                  Affiliation
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
            </Stack> */}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

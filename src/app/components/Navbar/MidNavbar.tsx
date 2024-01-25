import { Box, Divider, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Icon from "@mdi/react";
import { mdiMenuDown } from "@mdi/js";

const MidNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            Governing Body
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
        {/* <Link className={styles.navItem} href={"/"}> */}
        <div onMouseEnter={handleClick} onMouseLeave={handleClose}>
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
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
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
            <MenuItem className={styles.navItem}>State</MenuItem>
            <MenuItem className={styles.navItem}>Club</MenuItem>
            <MenuItem className={styles.navItem}>Academy</MenuItem>
            <MenuItem className={styles.navItem}>School</MenuItem>
            <MenuItem className={styles.navItem}>Affiliation</MenuItem>
          </Menu>
        </div>
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

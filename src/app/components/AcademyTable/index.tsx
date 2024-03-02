"use client";
import React from "react";
import styles from "./styles.module.css";
import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";

const rows = [
  {
    srn: 1,
    logo: require("../../../helper/academy-table/krishna-kumar-logo.jpg"),
    name: {
      fullName: "Mr. Krishna Kumar",
      post: "Chief Instructor",
      achievement: "Black Belt/BPED",
    },
    coach: {
      code: "NSMA/005/BH/40/A/A",
      instituteName: "SHANKAR INSTITUTE OF MARTIAL ARTS & SPORTS",
      city: "Darbhanga (Bihar)",
    },
    photo: require("../../../helper/academy-table/krishna-kumar.jpg"),
  },
  {
    srn: 2,
    // logo: require("../../../../helper/logo.jpg"),
    name: {
      fullName: "Mr. Ritesh Maurya",
      post: "National Champion",
      achievement: "Black Belt",
    },
    coach: {
      code: "NSMA/009/DEL/UT/08/A/A",
      instituteName: "R.M. NINJA MARTIAL ARTS ACADEMY",
      city: "South (Delhi)",
    },
    photo: require("../../../helper/academy-table/ritesh-maurya.jpg"),
  },
  {
    srn: 3,
    // logo: require("../../../../helper/logo.jpg"),
    name: {
      fullName: "Miss Rekha Arya",
      post: "Defence Trainer",
      achievement: "Black Belt Self",
    },
    coach: {
      code: "NSMA/009/DEL/UT/08/A/B",
      instituteName: "R.A. NINJA MARTIAL ARTS ACADEMY",
      city: "West (Delhi)",
    },
    photo: require("../../../helper/academy-table/rekha-arya.jpg"),
  },
  {
    srn: 4,
    // logo: require("../../../../helper/logo.jpg"),
    name: {
      fullName: "Mr. Mukesh Kumar",
      post: "Self Defence Trainer",
      achievement: "Trainer",
    },
    coach: {
      code: "NSMA/035/UP/340/A/A",
      instituteName: "M.K. NINJA MARTIAL ARTS ACADEMY",
      city: "Aligarh (U.P)",
    },
    photo: require("../../../helper/academy-table/mukesh-kumar.jpg"),
  },
  {
    srn: 5,
    // logo: require("../../../../helper/logo.jpg"),
    name: {
      fullName: "Mr. Rahul Bhardwaj",
      post: "Self Defence",
      achievement: "Trainer",
    },
    coach: {
      code: "NSMA/035/UP/340/A/B",
      instituteName: "R.B. NINJA MARTIAL ARTS ACADEMY",
      city: "Mathura (U.P)",
    },
    photo: require("../../../helper/academy-table/rahul-bhardwaj.jpg"),
  },
  {
    srn: 6,
    logo: require("../../../helper/academy-table/de-nayak-logo.png"),
    name: {
      fullName: "Mr. Dev naik",
      post: "Karate Instructor",
      achievement: "1st Dan Black Belt",
    },
    coach: {
      code: "NSMA/GUJ/100/A/A",
      instituteName: "NINJA SPORTS KARATE DOJO ACADEMY",
      city: "Navsari (Gujarat)",
    },
    photo: require("../../../helper/academy-table/dev-nayak.jpg"),
  },
];
const AcademyTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "90vw" }}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography
                textAlign={"center"}
                fontSize={"1rem"}
                fontWeight={700}
              >
                SR. NO.
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                textAlign={"center"}
                fontSize={"1rem"}
                fontWeight={700}
              >
                LOGO
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                textAlign={"center"}
                fontSize={"1rem"}
                fontWeight={700}
              >
                NAME
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                textAlign={"center"}
                fontSize={"1rem"}
                fontWeight={700}
              >
                TRAINER/COACH
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                textAlign={"center"}
                fontSize={"1rem"}
                fontWeight={700}
              >
                PHOTO
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow key={row.srn}>
              <TableCell component="th" scope="row">
                <Typography textAlign={"center"}>{row.srn}</Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {row.logo && (
                    <Image
                      src={row.logo}
                      height={150}
                      width={150}
                      alt="logo-img"
                    />
                  )}
                </Box>
              </TableCell>
              <TableCell>
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <Typography>{row.name.fullName}</Typography>
                  <Typography>{row.name.post}</Typography>
                  <Typography>{row.name.achievement}</Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <Box
                    sx={{
                      display: "flex",
                      backgroundColor: "blue",
                      color: "white",
                      borderRadius: "2rem",
                      paddingX: "1rem",
                    }}
                  >
                    <Typography>code.</Typography>
                    <Typography>{row.coach.code}</Typography>
                  </Box>
                  <Typography>{row.coach.instituteName}</Typography>
                  <Typography>{row.coach.city}</Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <Image
                  style={{ borderRadius: "1rem" }}
                  src={row.photo}
                  height={150}
                  width={150}
                  alt="photo"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AcademyTable;

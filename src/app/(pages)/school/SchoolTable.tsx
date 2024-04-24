"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const rows = [
  {
    srn: 1,
    logo: require("../../../helper/school-table/tamilnadu-logo.jpg"),
    name: {
      fullName: "Mr. BHAMO KALAIYARASAN",
    },
    coach: {
      code: "NSMA/031/TN/300/A/A",
      instituteName:
        "TAMILNADU MARTIAL ARTS AND SELF-DEFENCE INSTITUTE KARATE AND KUNG-FU SCHOOL",
      city: "Erode (Tamilnadu)",
    },
    photo: require("../../../helper/school-table/bhamo.jpg"),
  },
];

export default function SchoolTable() {
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
}

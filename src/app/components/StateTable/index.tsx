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
    logo: require("../../../helper/state-table/delhi-logo.png"),
    state: { code: "NSMA/009/DEL/UT/08", stateName: "Delhi" },
    officials: [
      {
        title: "Mrs.",
        name: "Sangeeta Chauhan",
        designation: "Gen. Secretary",
      },
    ],
    president: "",
    genSecreatary: require("../../../helper/state-table/sangeeta-chauhan-img.jpg"),
  },
  {
    srn: 2,
    logo: require("../../../helper/state-table/up-logo.png"),
    state: { code: "NSMA/035/UP/340", stateName: "Uttar Pradesh" },
    officials: [
      {
        title: "Mr.",
        name: "Vicky Panchal",
        designation: "Gen. Secretary",
      },
    ],
    president: "",
    genSecreatary: require("../../../helper/state-table/Vicky-Panchal-up-General-Secretary.jpg"),
  },
  {
    srn: 3,
    officials: [
      {
        title: "Mr.",
        name: "Ganesh Kumar",
        designation: "General Secretary",
      },
    ],
    state: { code: "NSMA/015/JH/140", stateName: "Jharkhand" },
    president: "",
    genSecreatary: require("../../../helper/state-table/ganeshkumar.jpg"),
  },

  {
    srn: 4,
    officials: [
      {
        title: "Mr.",
        name: "M.P.SUDHARSAN",
        designation: "President",
      },
    ],
    state: { code: "NSMA/031/TN/300", stateName: "TAMILNADU" },
    president: require("../../../helper/state-table/mp-sudharshan.jpg"),
    genSecreatary: "",
  },
  {
    srn: 5,
    officials: [
      {
        title: "Mr.",
        name: "Anami sharan",
        designation: "Gen. secretary",
      },
    ],
    state: { code: "NSMA/018/MP/170", stateName: "Madhya Pradesh" },
    president: "",
    genSecreatary: require("../../../helper/state-table/anami.jpg"),
  },
  {
    srn: 6,
    officials: [
      {
        title: "Mr.",
        name: "Anil Kumar",
        designation: "President",
      },
      {
        title: "Mr.",
        name: "Sandeep Kumar",
        designation: "Gen. secretary",
      },
    ],
    state: { code: "NSMA/SGFI/HR/110", stateName: "Haryana" },
    president: require("../../../helper/state-table/anil-kumar-haryana-president.jpg"),
    genSecreatary: require("../../../helper/state-table/sandeep-kumar-haryana-secretary.jpg"),
    logo: require("../../../helper/logo-for-slider/haryana.png"),
  },
  {
    srn: 7,
    officials: [
      {
        title: "Mr.",
        name: "Dr. Shyam Sundar Verma",
        designation: "President",
      },
    ],
    state: { code: "NSMA/007/CHT/60", stateName: "Chhattisgarh" },
    president: require("../../../helper/state-table/shyam-sundar.jpg"),
  },
];

export default function StateTable() {
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
                STATE
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                textAlign={"center"}
                fontSize={"1rem"}
                fontWeight={700}
              >
                OFFICIALS
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                textAlign={"center"}
                fontSize={"1rem"}
                fontWeight={700}
              >
                President
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                textAlign={"center"}
                fontSize={"1rem"}
                fontWeight={700}
              >
                Gen. Secretary
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
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
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={1}
                >
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
                    <Typography>{row.state.code}</Typography>
                  </Box>
                  <Typography>{row.state.stateName}</Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <Stack justifyContent="center" alignItems="center" spacing={2}>
                  {row.officials.map((official, index) => (
                    <Stack
                      key={index}
                      style={{
                        flexDirection: "column",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>
                        <span>{official?.title} </span>
                        {official?.name}
                      </Typography>
                      <Typography>{official?.designation}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </TableCell>
              <TableCell>
                {row.president && (
                  <Stack justifyContent={"center"} alignItems={"center"}>
                    <Image
                      src={row?.president}
                      height={150}
                      width={150}
                      alt="gen-sec-img"
                      style={{ borderRadius: "1rem" }}
                    />
                  </Stack>
                )}
              </TableCell>
              <TableCell>
                {row.genSecreatary && (
                  <Stack justifyContent={"center"} alignItems={"center"}>
                    <Image
                      src={row?.genSecreatary}
                      height={150}
                      width={150}
                      alt="gen-sec-img"
                      style={{ borderRadius: "1rem" }}
                    />
                  </Stack>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

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
    officials: {
      title: "Mrs.",
      name: "Sangeeta Chauhan",
      designation: "Gen. Secretary",
    },
    president: "",
    genSecreatary: require("../../../helper/state-table/sangeeta-chauhan-img.jpg"),
  },
  {
    srn: 2,
    logo: require("../../../helper/state-table/up-logo.jpg"),
    state: { code: "NSMA/035/UP/340", stateName: "Uttar Pradesh" },
    officials: {
      title: "Mr.",
      name: "T.S. Rana",
      designation: "Gen. Secretary",
    },
    president: "",
    genSecreatary: require("../../../helper/state-table/ts-rana-up.jpg"),
  },
  {
    srn: 3,
    logo: require("../../../helper/state-table/kk-logo.jpg"),
    state: { code: "NSMA/015/JH/140", stateName: "Jharkhand" },
    officials: {
      title: "Mr.",
      name: "Kalim Khan",
      designation: "Gen. Secretary",
    },
    president: "",
    genSecreatary: require("../../../helper/state-table/kalim-khan-img.jpg"),
  },
  {
    srn: 4,
    state: { code: "NSMA/029/RAJ/280", stateName: "Rajasthan" },
    officials: {
      title: "Mr.",
      name: "Dr. Bharat Panwar",
      designation: "Gen. Secretary",
    },
    president: "",
    genSecreatary: require("../../../helper/state-table/bharat-panwar.png"),
  },
  {
    srn: 5,
    logo: require("../../../helper/state-table/odisha-logo.jpg"),
    state: { code: "NSMA/026/ODI/250", stateName: "Odisha" },
    officials: {
      title: "Mr.",
      name: "Dr. Dibya Ranjan Barad",
      designation: "Gen. Secretary",
    },
    president: "",
    genSecreatary: require("../../../helper/state-table/dibyaRanjan.jpg"),
  },
  {
    srn: 6,
    state: { code: "NSMA/021/MH/200", stateName: "Maharashtra" },
    officials: {
      title: "Mr.",
      name: "Prakash Pandit",
      designation: "Gen. Secretary",
    },
    president: "",
    genSecreatary: require("../../../helper/state-table/prakash.jpg"),
  },
  {
    srn: 7,
    officials: {
      title: "Mr.",
      name: "M.P.SUDHARSAN",
      designation: "President",
    },
    state: { code: "NSMA/031/TN/300", stateName: "TAMILNADU" },
    president: require("../../../helper/state-table/mp-sudharshan.jpg"),
    genSecreatary: "",
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
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <Typography>
                    <span>{row?.officials?.title} </span>
                    {row?.officials?.name}
                  </Typography>
                  <Typography>{row?.officials?.designation}</Typography>
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

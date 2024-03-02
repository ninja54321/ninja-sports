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
    genSecretary: require("../../../helper/state-table/sangeeta-chauhan-img.jpg"),
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
    genSecretary: require("../../../helper/state-table/ts-rana-up.jpg"),
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
    genSecretary: require("../../../helper/state-table/kalim-khan-img.jpg"),
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
                  <Image
                    src={row.logo}
                    height={150}
                    width={150}
                    alt="logo-img"
                  />
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
                    <span>{row.officials.title}</span>
                    {row.officials.name}
                  </Typography>
                  <Typography>{row.officials.designation}</Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography alignItems={"center"}>{row.president}</Typography>
              </TableCell>
              <TableCell>
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <Image
                    src={row.genSecretary}
                    height={150}
                    width={150}
                    alt="gen-sec-img"
                    style={{ borderRadius: "1rem" }}
                  />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

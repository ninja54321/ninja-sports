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
    logo: "",
    address: {
      code: "NSMA/031/TN/300/B/A",
      stateName: "Tamilnadu",
      district: "Erode",
    },
    officials: {
      title: "Mrs.",
      name: "BHAMO KALAIYARASAN",
      instituteName:
        "TAMILNADU MARTIAL ARTS AND SELF-DEFENCE INSTITUTE KARATE AND KUNG-FU SCHOOL",
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
                whiteSpace={"nowrap"}
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
                Address
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
                Institute Name
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
                  {row?.logo && (
                    <Image
                      src={row?.logo}
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
                    <Typography>{row.address.code}</Typography>
                  </Box>
                  <Typography>
                    <span style={{ fontWeight: 600 }}>District:</span>{" "}
                    {row.address.district}
                  </Typography>
                  <Typography>
                    {" "}
                    <span style={{ fontWeight: 600 }}>State:</span>{" "}
                    {row.address.stateName}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <Typography sx={{ whiteSpace: "nowrap" }}>
                    {row?.officials?.title} {row?.officials?.name}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <Stack>
                  <Typography textAlign={"center"}>
                    {row.officials.instituteName}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <Image
                    src={row.photo}
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

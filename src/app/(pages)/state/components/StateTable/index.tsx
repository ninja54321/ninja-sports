import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

function createData(
  srn: number,
  logo: string,
  state: {
    code: string;
    stateName: String;
  },
  officials: { title: string; name: string; designation: string },
  president: string,
  genSecretary: string
) {
  return { srn, logo, state, officials, president, genSecretary };
}

const rows = [
  // createData(
  //   1,
  //   require("../../../../../helper/state-table/delhi-logo.jpg"),
  //   { code: "NSMA/009/DEL/UT/08", stateName: "Delhi" },
  //   {
  //     title: "Mrs.",
  //     name: "Sangeeta Chauhan",
  //     designation: "Gen. Secretary",
  //   },
  //   "",
  //   require("../../../../../helper/state-table/sangeeta-chauhan-img.jpg")
  // ),
  {
    srn: 1,
    logo: require("../../../../../helper/state-table/delhi-logo.png"),
    state: { code: "NSMA/009/DEL/UT/08", stateName: "Delhi" },
    officials: {
      title: "Mrs.",
      name: "Sangeeta Chauhan",
      designation: "Gen. Secretary",
    },
    president: "",
    genSecretary: require("../../../../../helper/state-table/sangeeta-chauhan-img.jpg"),
  },
  {
    srn: 2,
    logo: require("../../../../../helper/state-table/is-logo.jpg"),
    state: { code: "NSMA/035/UP/340", stateName: "Uttar Pradesh" },
    officials: {
      title: "Mr.",
      name: "I.S. Chauhan",
      designation: "Gen. Secretary",
    },
    president: "",
    genSecretary: require("../../../../../helper/is-chauhan-GS.jpg"),
  },
  {
    srn: 3,
    logo: require("../../../../../helper/state-table/kk-logo.jpg"),
    state: { code: "NSMA/015/JH/140", stateName: "Jharkhand" },
    officials: {
      title: "Mr.",
      name: "Kalim Khan",
      designation: "Gen. Secretary",
    },
    president: "",
    genSecretary: require("../../../../../helper/state-table/kalim-khan-img.jpg"),
  },
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "90vw" }}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "1rem", fontWeight: 700 }}>
              SR. NO.
            </TableCell>
            <TableCell sx={{ fontSize: "1rem", fontWeight: 700 }}>
              LOGO
            </TableCell>
            <TableCell sx={{ fontSize: "1rem", fontWeight: 700 }}>
              STATE
            </TableCell>
            <TableCell sx={{ fontSize: "1rem", fontWeight: 700 }}>
              OFFICIALS
            </TableCell>
            <TableCell sx={{ fontSize: "1rem", fontWeight: 700 }}>
              President
            </TableCell>
            <TableCell sx={{ fontSize: "1rem", fontWeight: 700 }}>
              Gen. Secretary
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.srn}>
              <TableCell component="th" scope="row">
                {row.srn}
              </TableCell>
              <TableCell>
                <Image src={row.logo} height={150} width={150} alt="logo-img" />
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    backgroundColor: "blue",
                    color: "white",
                  }}
                >
                  <Typography>coed.</Typography>
                  <Typography>{row.state.code}</Typography>
                </Box>
                <Typography>{row.state.stateName}</Typography>
              </TableCell>
              <TableCell>
                <Box>
                  <Typography>
                    <span>{row.officials.title}</span>
                    {row.officials.name}
                  </Typography>
                  <Typography>{row.officials.designation}</Typography>
                </Box>
              </TableCell>
              <TableCell>{row.president}</TableCell>
              <TableCell>
                <Image
                  src={row.genSecretary}
                  height={150}
                  width={150}
                  alt="gen-sec-img"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const RegistrationSection = () => {
  return (
    <Box
      sx={{
        padding: "1rem",
        gap: "2.5rem",
        backgroundColor: "#babdc2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          color={"white"}
          gutterBottom
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "1rem",
              md: "1.4rem",
            },
          }}
        >
          Affiliation is Now Open!
        </Typography>

        <Button
          variant="contained"
          sx={{
            width: "8.5rem",
          }}
        >
          Apply now !!!
        </Button>
      </Box>

      <Image
        layout="responsive"
        src={require("../../../helper/logo-2.png")}
        alt="logo"
        style={{ opacity: 0.5, maxWidth: 120 }}
      />
    </Box>
  );
};

export default RegistrationSection;

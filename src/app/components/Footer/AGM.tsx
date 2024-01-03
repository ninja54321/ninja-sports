import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AGM = () => {
  return (
    <Box sx={{ backgroundColor: "#F1B42F", padding: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <Box>
          <Image
            layout="responsive"
            style={{
              maxWidth: '40%',
            }}
            src={require("../../../helper/footer/agm.png")}
            alt="agm"
          />
          <Typography
            fontWeight={"600"}
            color={"darkblue"}
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "2rem",
                md: "3rem",
              },
            }}
          >
            Date 31-12-2023
          </Typography>
          <Typography
            fontWeight={"600"}
            color={"darkslategrey"}
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1.5rem",
                md: "2rem",
              },
            }}
          >
            Time 2:00 PM
          </Typography>
        </Box>
        <Image
          layout="responsive"
          style={{
            maxWidth: "30%",
          }}
          src={require("../../../helper/footer/group1.png")}
          alt="group"
        />
      </Box>
    </Box>
  );
};

export default AGM;

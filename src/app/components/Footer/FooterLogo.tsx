import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const FooterLogo = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      padding={"1rem"}
      sx={{ backgroundColor: "#babdc2" }}
    >
      <Typography
        variant="h3"
        fontWeight={"700"}
        color={"red"}
        sx={{
          fontSize: {
            xs: "1rem", 
            sm: "2rem", 
            md: "2.5rem",
          },
        }}
      >
        NINJA SPORTS MARTIAL ART
      </Typography>

      <Stack direction={"row"} justifyContent={"center"} position={"relative"}>
        <Box>
          <Image
            style={{ maxHeight: 200 }}
            layout="responsive"
            src={require("../../../helper/logo-2.png")}
            alt="logo"
          />
        </Box>
        <Stack alignItems={"center"}>
          <Typography
            variant="h3"
            fontWeight={"700"}
            color={"red"}
            sx={{
              fontSize: {
                xs: "1rem", 
                sm: "2rem", 
                md: "2.5rem",
              },
            }}
          >
            SCHOOL GAMES
          </Typography>
          <Typography
            variant="h3"
            fontWeight={"700"}
            color={"red"}
            sx={{
              fontSize: {
                xs: "1rem", 
                sm: "2rem", 
                md: "2.5rem",
              },
            }}
          >
            FEDERATION OF INDIA
          </Typography>

          <Box
            sx={{
              backgroundColor: "darkblue",
              height: "0.2rem",
              width: "100%",
            }}
          ></Box>

          <Typography
            variant="h5"
            fontWeight={"700"}
            color={"#288a30"}
            sx={{
              fontSize: {
                xs: "0.8rem", 
                sm: "1.2rem", 
                md: "1.4rem",
              },
            }}
          >
            All Indore & Outdoor Games
          </Typography>

          <Typography
            variant="h5"
            fontWeight={"600"}
            color={"red"}
            sx={{
              fontSize: {
                xs: "0.8rem", 
                sm: "1.2rem", 
                md: "1.4rem",
              },
            }}
          >
            Affiliated
          </Typography>

          <Typography
            variant="h5"
            fontWeight={"700"}
            color={"darkblue"}
            sx={{
              fontSize: {
                xs: "0.6rem", 
                sm: "1.2rem", 
                md: "1.4rem",
              },
            }}
          >
            MINISTRY OF CORPORATE AFFAIRS
          </Typography>
          <Typography
            variant="h5"
            fontWeight={"700"}
            color={"darkblue"}
            sx={{
              fontSize: {
                xs: "0.6rem", 
                sm: "1.2rem", 
                md: "1.4rem",
              },
            }}
          >
            GOVERNMENT OF INDIA
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FooterLogo;

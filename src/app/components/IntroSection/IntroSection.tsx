import { Box, Stack, ThemeProvider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const IntroSection = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="85%" // Set the width to 85% of the viewport width
      mx="auto" // Center the container horizontally
    >
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Box width={"100%"}>
          <Image
            alt="icon"
            layout="responsive"
            style={{ maxHeight: 120 }}
            src={require("../../../helper/front-page-img/khelo-india-logo.png")}
          />
        </Box>

        <Box>
          <Image
            alt="icon"
            layout="responsive"
            style={{ maxHeight: 160 }}
            src={require("../../../helper/front-page-img/FIT.png")}
          />
        </Box>

        <Box width={"100%"}>
          <Image
            alt="icon"
            layout="responsive"
            style={{ maxHeight: 100 }}
            src={require("../../../helper/front-page-img/swaksh-bharat.png")}
          />
        </Box>
      </Stack>

      <Box
        sx={{ backgroundColor: "blue", height: "0.2rem", width: "100%" }}
      ></Box>

      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography
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

        <Stack
          direction={"row"}
          justifyContent={"center"}
          position={"relative"}
        >
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
              variant="h2"
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
              variant="h2"
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

            <Typography
              fontWeight={"600"}
              color={"blue"}
              sx={{
                fontSize: {
                  xs: "0.8rem", 
                  sm: "1.4rem", 
                  md: "1.5rem",
                },
              }}
            >
              Affiliated
            </Typography>

            <Typography
              fontWeight={"800"}
              color={"#13c242"}
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
              fontWeight={"800"}
              color={"#13c242"}
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

            <Box width={"100%"}>
              <Image
                layout="responsive"
                src={require("../../../helper/front-page-img/yellow-highlite.png")}
                alt="highlited-text"
              />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default IntroSection;

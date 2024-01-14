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
      width="100%" // Set the width to 85% of the viewport width
      mx="auto" // Center the container horizontally
    >
      <Stack direction={"row"}>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Image
            style={{ maxHeight: 300 }}
            layout="responsive"
            src={require("../../../helper/logo-2.png")}
            alt="logo"
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Typography
            fontWeight={"700"}
            color={"red"}
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.8rem",
                md: "2.8rem",
                lg: "3.5rem",
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
            <Stack alignItems={"center"}>
              <Typography
                variant="h2"
                fontWeight={"700"}
                color={"red"}
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1.2rem",
                    md: "2.1rem",
                    lg: "2.5rem",
                  },
                }}
              >
                SCHOOL GAMES FEDERATION OF INDIA
              </Typography>

              <Typography
                fontWeight={"600"}
                color={"blue"}
                sx={{
                  fontSize: {
                    xs: "0.6rem",
                    sm: "1rem",
                    md: "1.2rem",
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
                    sm: "1rem",
                    md: "1.2rem",
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
                    sm: "1rem",
                    md: "1.2rem",
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
      </Stack>

      {/* banner */}
      <Box
        height={"2rem"}
        width={"100%"}
        sx={{
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{ backgroundColor: "blue", height: "0.2rem", width: "100%" }}
        ></Box>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          width={"100%"}
        >
          <Box>
            <Image
              alt="icon"
              layout="responsive"
              style={{ maxHeight: 100 }}
              src={require("../../../helper/front-page-img/khelo-india-logo.png")}
            />
          </Box>

          <Box>
            <Image
              alt="icon"
              layout="responsive"
              style={{ maxHeight: 60 }}
              src={require("../../../helper/front-page-img/FIT.png")}
            />
          </Box>

          <Box p={"1rem"}>
            <Image
              alt="icon"
              layout="responsive"
              style={{ maxHeight: 60 }}
              src={require("../../../helper/front-page-img/swaksh-bharat.png")}
            />
          </Box>
        </Stack>

        <Box
          sx={{ backgroundColor: "blue", height: "0.2rem", width: "100%" }}
        ></Box>
      </Box>
    </Box>
  );
};

export default IntroSection;

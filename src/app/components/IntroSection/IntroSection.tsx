import { Box, Stack, ThemeProvider, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

const IntroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection="column"
      width="100%"
      mx="auto"
    >
      <Stack direction={{ xs: "column", sm: "row" }} width={"100%"}>
        <div
          className="logoImg"
          data-aos="zoom-out-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <Box display={{ xs: "none", sm: "block" }}>
            <Image
              style={{
                maxHeight: 200,
              }}
              layout="responsive"
              src={require("../../../helper/logo/logo-bg-remove.png")}
              alt="logo"
            />
          </Box>
        </div>

        <Box display={"flex"} width={"100%"}>
          <div
            data-aos="zoom-out-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="logoImg"
          >
            <Box display={{ xs: "block", sm: "none" }}>
              <Image
                height={50}
                src={require("../../../helper/logo-2.png")}
                alt="logo"
              />
            </Box>
          </div>
          <Box width="100%" display={"flex"} flexDirection={"column"}>
            <Typography
              fontWeight={"700"}
              textAlign={"center"}
              color={"red"}
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "2rem",
                  md: "2.8rem",
                  lg: "4rem",
                },
              }}
            >
              NINJA SPORTS MARTIAL ART
            </Typography>

            <Stack alignItems={"center"} justifyContent={"center"}>
              <Typography
                textAlign={"center"}
                variant="h2"
                fontWeight={"700"}
                color={"red"}
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1.6rem",
                    md: "2.2rem",
                    lg: "3.2rem",
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
                    xs: "0.5rem",
                    sm: "1rem",
                    md: "1.5rem",
                    lg: "2rem",
                  },
                }}
              >
                Affiliated
              </Typography>

              <Typography
                fontWeight={"800"}
                color={"#034f84"}
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.8rem",
                    md: "1.4rem",
                    lg: "1.6rem",
                  },
                }}
              >
                MINISTRY OF CORPORATE AFFAIRS
              </Typography>
              <Typography
                fontWeight={"800"}
                color={"#034f84"}
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.8rem",
                    md: "1.4rem",
                    lg: "1.6rem",
                  },
                }}
              >
                GOVERNMENT OF INDIA
              </Typography>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                sx={{
                  backgroundColor: "#FFD93D",
                  paddingX: "4rem",
                  borderRadius: "1rem",
                }}
              >
                <Typography
                  fontWeight={"600"}
                  color={"#002147"}
                  sx={{
                    fontSize: {
                      xs: "0.5rem",
                      sm: "1rem",
                      md: "1.5rem",
                      lg: "2rem",
                    },
                  }}
                >
                  All Indoor & Outdoor Games
                </Typography>
              </Box>
            </Stack>
          </Box>
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
          <Image
            alt="icon"
            height={50}
            src={require("../../../helper/front-page-img/khelo-india-logo.png")}
          />

          <Image
            alt="icon"
            height={25}
            src={require("../../../helper/front-page-img/FIT.png")}
          />

          <Image
            alt="icon"
            height={45}
            src={require("../../../helper/front-page-img/swaksh-bharat.png")}
          />
        </Stack>

        <Box
          sx={{ backgroundColor: "blue", height: "0.2rem", width: "100%" }}
        ></Box>
      </Box>
    </Box>
  );
};

export default IntroSection;

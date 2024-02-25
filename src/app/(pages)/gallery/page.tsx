import {
  CrouselComponent,
  Footer,
  IntroSection,
  MidNavbar,
  Navbar,
} from "@/app/components";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import PhotoSection from "./PhotoSection";
import { sliderItems1 } from "@/app/components/Crousel/content";

const page = () => {
  return (
    <main
      style={{
        backgroundColor: "#82b9d1",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Box>
        <IntroSection />
      </Box>
      <Box mt={"2.4rem"}>
        <MidNavbar />
      </Box>

      <Box
        textAlign="center"
        width={"100%"}
        mt={{ xs: "0.5rem", md: "4rem" }}
        mb={{
          xs: "2rem",
          md: "4rem",
        }}
      >
        <Typography
          color={"blue"}
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: 500,
          }}
        >
          Our Photo Gallery
        </Typography>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <CrouselComponent data={sliderItems1} />
        </Box>
      </Box>

      <Stack justifyContent={"center"} alignItems={"center"}>
        <PhotoSection />
      </Stack>

      <Box
        marginTop={"6rem"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CrouselComponent data={sliderItems1} />
      </Box>

      <Footer />
    </main>
  );
};

export default page;

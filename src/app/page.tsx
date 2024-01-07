import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import {
  CrouselComponent,
  Footer,
  FrontDescAndAnouncement,
  IntroSection,
  Navbar,
  NinjaTeamCards,
  RegistrationSection,
} from "./components";

export default function Home() {
  return (
    <main
      className={styles.main}
      style={{ backgroundColor: "#E3F4F4" }}
    >
      <Navbar />

      <Box height={{ xs: "50vh", sm: "70vh", lg: "75vh" }}>
        <IntroSection />
      </Box>

      <Box>
        <FrontDescAndAnouncement />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
            <CrouselComponent />
          </Box>
        </Box>
      </Box>

      <Box margin={"1rem"}>
        <RegistrationSection />
      </Box>

      <NinjaTeamCards />

      <Footer />
    </main>
  );
}

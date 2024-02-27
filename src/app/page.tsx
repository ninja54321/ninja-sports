import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import {
  Footer,
  FrontDescAndAnouncement,
  IntroSection,
  MidNavbar,
  Navbar,
  NinjaTeamCards,
  RegistrationSection,
} from "./components";

export default function Home() {
  return (
    <main className={styles.main} style={{ backgroundColor: "#82b9d1" }}>
      <Navbar />

      <Box>
        <IntroSection />
      </Box>

      {/* section Navbar */}
      <Box mt={"2.4rem"}>
        <MidNavbar />
      </Box>

      <Box>
        <FrontDescAndAnouncement />
      </Box>

      {/* crousel */}
      {/* <Box
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
     
        </Box>
      </Box> */}

      {/* <Box margin={"1rem"}>
        <RegistrationSection />
      </Box> */}

      <NinjaTeamCards />

      <Footer />
    </main>
  );
}

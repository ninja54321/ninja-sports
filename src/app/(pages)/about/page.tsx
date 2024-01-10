import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./page.module.css";
import { Navbar } from "@/app/components";
import { MidSectionDesc, OurAchievements } from "./components";
import ContactText from "@/app/components/Footer/ContactText";
import PersonInfoCard from "@/app/components/Footer/PersonInfoCard";

const About = () => {
  return (
    <main className={styles.main} style={{ backgroundColor: "#fffcd8" }}>
      <Navbar />
      <MidSectionDesc />
      <OurAchievements />

      <Grid container spacing={2} marginY={"2rem"}>
        <Grid item xs={6} sm={4}>
          <PersonInfoCard
            name={"Mr. Sunil Chauhan"}
            designation={"President"}
            text={"(NSMASFGI)"}
          />
        </Grid>

        <Grid item xs={6} sm={4}>
          <PersonInfoCard
            name={"Mr. Sanjay Chaudhary"}
            designation={"Vice President"}
            text={"(NSMASFGI)"}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <PersonInfoCard
            name={"Mr. I.S. Chauhan"}
            designation={"General Secretary"}
            text={"(NSMASFGI)"}
          />
        </Grid>
      </Grid>


      <ContactText />
    </main>
  );
};

export default About;

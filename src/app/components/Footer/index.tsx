import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IntroSection } from "..";
import FooterLogo from "./FooterLogo";
import AGM from "./AGM";
import PersonInfoCard from "./PersonInfoCard";
import ContactText from "./ContactText";

const Footer = () => {
  return (
    <Box>
      <FooterLogo />
      <AGM />

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
    </Box>
  );
};

export default Footer;

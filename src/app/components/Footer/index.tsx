import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { IntroSection } from "..";
import FooterLogo from "./FooterLogo";
import AGM from "./AGM";
import PersonInfoCard from "./PersonInfoCard";
import ContactText from "./ContactText";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box>
      {/* <FooterLogo /> */}
      {/* <AGM /> */}

      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
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
      </div>

      <ContactText />
    </Box>
  );
};

export default Footer;

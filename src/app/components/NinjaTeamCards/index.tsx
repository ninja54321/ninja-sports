import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import RoundImageCard from "./RoundedImageCard";
import AOS from "aos";
import "aos/dist/aos.css";

const NinjaTeamCards = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box margin={"4rem"}>
      <Typography
        textAlign={"center"}
        marginTop={"2rem"}
        color={"#939596"}
        fontSize={"2.5rem"}
        fontWeight={"700"}
        fontStyle={"italic"}
        gutterBottom
      >
        Our Team Thoughts!!!
      </Typography>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Grid container spacing={2} mt={"2rem"} justifyContent={"center"}>
          <Grid item xs={12} sm={12} md={4}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <RoundImageCard
                imageSrc={require("../../../helper/sunilchauhan-president.jpg")}
                name="Sunil Chauhan"
                designation="President"
                description="A sport institute plays a crucial role in fostering a sense of community, promoting physical well-being, and nurturing talent within the region."
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <RoundImageCard
                imageSrc={require("../../../helper/sanjay-chaudhary-vp.jpg")}
                name="Sanjay Chaudhary"
                designation="Vice President"
                description="The Sports Institute, recognizing it as a powerhouse of talent cultivation, resilience, and teamwork. Positively envisioning a future of athletic excellence."
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <RoundImageCard
                imageSrc={require("../../../helper/is-chauhan-GS.jpg")}
                name="IS Chauhan"
                designation={"(General Secretary)"}
                description="This institute is a beacon of empowerment and discipline in our community. 
              Under expert guidance, it builds strength, resilience, and camaraderie."
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default NinjaTeamCards;

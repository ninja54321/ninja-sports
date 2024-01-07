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
import React from "react";
import RoundImageCard from "./RoundedImageCard";

const NinjaTeamCards = () => {
  return (
    <Box margin={"4rem"}>
      <Typography
        marginTop={"2rem"}
        color={"#939596"}
        variant="h4"
        gutterBottom
      >
        Our Team Thoughts!!!
      </Typography>

      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Grid container spacing={2} mt={"2rem"} justifyContent={"center"}>
          <Grid item xs={12} sm={12} md={4}>
            <RoundImageCard
              imageSrc={require("../../../helper/sunilchauhan-president.jpg")}
              name="Sunil Chauhan"
              designation="President"
              description="A  sport institute plays a crucial role in fostering a sense of community, promoting physical well-being, and nurturing talent within the region. By providing access to high-quality training facilities, expert coaching, and organized sporting events, the institute contributes to the overall health and fitness of the community members."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RoundImageCard
              imageSrc={require("../../../helper/sanjay-chaudhary-vp.jpg")}
              name="Sanjay Chaudhary"
              designation="Vice President"
              description="the Sports Institute, recognizing it as a powerhouse of talent cultivation, resilience, and teamwork. Positively envisioning a future of athletic excellence, the VP commends the institute for fostering not just physical prowess, but also instilling valuable life skills in its aspiring athletes."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RoundImageCard
              imageSrc={require("../../../helper/is-chauhan-GS.jpg")}
              name="IS Chauhan"
              designation={"(General Secretary)"}
              description="The Ninja sports martial arts  institute is a beacon of empowerment and discipline in our community. Through expert guidance, it cultivates physical strength, mental resilience, and a strong sense of camaraderie. This institute not only hones martial skills but also instills valuable life lessons, fostering personal growth and community unity."
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default NinjaTeamCards;

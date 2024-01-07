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
        textAlign={"center"}
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
              description="A sport institute plays a crucial role in fostering a sense of community, promoting physical well-being, and nurturing talent within the region."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RoundImageCard
              imageSrc={require("../../../helper/sanjay-chaudhary-vp.jpg")}
              name="Sanjay Chaudhary"
              designation="Vice President"
              description="The Sports Institute, recognizing it as a powerhouse of talent cultivation, resilience, and teamwork. Positively envisioning a future of athletic excellence."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RoundImageCard
              imageSrc={require("../../../helper/is-chauhan-GS.jpg")}
              name="IS Chauhan"
              designation={"(General Secretary)"}
              description="This institute is a beacon of empowerment and discipline in our community. 
              Under expert guidance, it builds strength, resilience, and camaraderie."
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default NinjaTeamCards;

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
          <Grid item xs={12} sm={12} md={6}>
            <RoundImageCard
              imageSrc={require("../../../helper/is-chauhan-GS.jpg")}
              name="IS Chauhan"
              designation={"(General Secretary)"}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consectetur rem repudiandae odio ut ducimus sed voluptatem minus iusto necessitatibus!"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <RoundImageCard
              imageSrc={require("../../../helper/sanjay-chaudhary-vp.jpg")}
              name="Sanjay Chaudhary"
              designation="Vice President"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consectetur rem repudiandae odio ut ducimus sed voluptatem minus iusto necessitatibus!"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default NinjaTeamCards;

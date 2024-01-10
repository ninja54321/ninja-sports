import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { red } from "@mui/material/colors";
import AchievementCard from "./AchievementCard";

const OurAchievements = () => {
  return (
    <Stack alignItems={"center"}>
      <Typography sx={{ fontSize: "2rem", fontWeight: "500" }}>
        Our Achievements
      </Typography>

      <Stack>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4}>
            <AchievementCard
              img={require("../../../../../helper/ninja-img/img-19.jpg")}
              title={"Won the competition"}
              date={"September 14, 2023"}
              desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium aspernatur earum mollitia cumque, aperiam animi fuga dolor excepturi similique."
              }
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <AchievementCard
              img={require("../../../../../helper/ninja-img/img-15.jpg")}
              title={"Won the competition"}
              date={"September 14, 2023"}
              desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium aspernatur earum mollitia cumque, aperiam animi fuga dolor excepturi similique."
              }
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <AchievementCard
              img={require("../../../../../helper/ninja-img/img-18.jpg")}
              title={"Won the competition"}
              date={"September 14, 2023"}
              desc={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium aspernatur earum mollitia cumque, aperiam animi fuga dolor excepturi similique."
              }
            />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default OurAchievements;

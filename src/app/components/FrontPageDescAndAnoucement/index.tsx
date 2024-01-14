import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import AnnouncementCard from "./AnnouncementCard";
import { cardData } from "./constant";

const FrontDescAndAnouncement = () => {
  return (
    <Box>
      {/* small intro section */}
      <Box
        display={"flex"}
        gap={"2rem"}
        flexDirection={{ xs: "column", md: "row" }}
      >
        {/* <Image
          height={500}
          layout="responsive"
          src={require("../../../helper/ninja-img/img-38.jpg")}
          alt="khelo youth"
        /> */}

        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          padding={"2rem"}
        >
          <Typography variant="h4" m={"10px"} gutterBottom>
            Welcome
          </Typography>
          <Typography>
            <span style={{ fontWeight: "700" }}>Meaning of Ninja:</span> This
            art emphasizes speed and efficiency in every task, teaching
            practitioners to be fast, faster, and the fastest in their
            endeavors. It is an art that encourages individuals to prove their
            abilities by accomplishing tasks swiftly, akin to the sudden attack
            Ninja is a martial art that encompasses various defensive
            techniques, preparing individuals to defend themselves against
            attacks or weapons. It not only enhances physical skills but also
            contributes to mental strength.
            <br />
            <br />
            This self-defense sport is suitable for both boys and girls,
            offering the opportunity to excel in disciplines like Judo, Karate,
            Taekwondo, Jeet Kune Do, Wushu, Boxing, Kickboxing, or Muay Thai.
            Therefore, parents and guardians are urged to introduce their
            children to this beneficial sport, enabling them to not only develop
            self-defense skills but also potentially succeed in various sports
            competitions. Wishing all children a bright and successful future.
          </Typography>

          <Button sx={{ mt: "2rem" }} variant="outlined">
            Find out More
          </Button>
        </Box>
      </Box>

      {/* Announcements section */}

      {/* <Box
        my={"4rem"}
        textAlign={"center"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Typography
          marginY={"3rem"}
          variant="h4"
          color={"GrayText"}
          gutterBottom
        >
          Announcement & Updates
        </Typography>
        <Box width={"90vw"}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <AnnouncementCard
                heading="Heading 1"
                content="lksdf"
                images={cardData.card1Img}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6}>
              <AnnouncementCard
                heading="Heading 2"
                content="lksdf"
                images={cardData.card2Img}
              />
            </Grid>
          </Grid>
        </Box>
      </Box> */}
    </Box>
  );
};

export default FrontDescAndAnouncement;

import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
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
        <Image
          height={500}
          layout="responsive"
          src={require("../../../helper/ninja-img/img-38.jpg")}
          alt="khelo youth"
        />

        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ xs: "center", md: "start" }}
          justifyContent={"center"}
          padding={"2rem"}
        >
          <Typography variant="h4">Welcome</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur obcaecati distinctio atque, ex maiores tempora labore
            quos iure sequi magnam aut officiis perspiciatis? Nobis voluptates
            sint maxime quo dicta laborum, dolorum temporibus beatae voluptas
            iusto consectetur cum. Asperiores qui labore, repellat, eaque
            praesentium iure autem voluptatum laborum dignissimos minima
            pariatur?
          </Typography>

          <Button sx={{ mt: "2rem" }} variant="outlined">
            Find out More
          </Button>
        </Box>
      </Box>

      {/* Announcements section */}

      <Box
        my={"4rem"}
        textAlign={"center"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Typography marginY={'3rem'} variant="h4" color={"GrayText"} gutterBottom>
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
      </Box>
    </Box>
  );
};

export default FrontDescAndAnouncement;

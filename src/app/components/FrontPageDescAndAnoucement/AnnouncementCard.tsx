import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Tcard } from "./constant";

interface AnnouncementCardProps {
  heading: string;
  images: Tcard[];
  content: string;
}

const AnnouncementCard = ({
  heading,
  images,
  content,
}: AnnouncementCardProps) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#f2f4f3",
          overflow: "hidden",
          textAlign: "center",
        }}
        width={"35rem"}
      >
        <Typography variant="h4" marginY={"1.5rem"} gutterBottom>
          {heading}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Image
              layout="responsive"
              style={{ height: 200, width: "100%" }}
              src={images[0].src}
              alt="grid-img"
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              layout="responsive"
              style={{ height: 200, width: "100%" }}
              src={images[1].src}
              alt="grid-img"
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              layout="responsive"
              style={{ height: 200, width: "100%" }}
              src={images[2].src}
              alt="grid-img"
            />
          </Grid>
          <Grid item xs={6}>
            <Image
              layout="responsive"
              style={{ height: 200, width: "100%" }}
              src={images[3].src}
              alt="grid-img"
            />
          </Grid>

          <Grid item xs={6}>
            <Image
              style={{ height: 200, width: "100%" }}
              src={images[4].src}
              alt="grid-img"
            />
          </Grid>
        </Grid>

        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam
          veniam eum, recusandae ipsam beatae necessitatibus hic animi quo porro
          quia deleniti expedita fugiat nobis modi repellendus ratione eligendi
          tenetur temporibus reiciendis perspiciatis commodi laboriosam
          quisquam, corrupti nobis culpa consequuntur cumque ipsum. <br />{" "}
          <br /> Eum officia earum eos. Nemo repellat quisquam aperiam,
          eligendi, fuga consectetur libero, odit labore a vel laborum. In
          inventore, nesciunt ea
        </Typography>
      </Box>
    </Box>
  );
};

export default AnnouncementCard;

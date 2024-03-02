"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import Item from "./Item";
import { ISliderItems } from "./content";

interface ICrouselComponentProps {
  data: ISliderItems[];
}

function CrouselComponent({ data }: ICrouselComponentProps) {
  return (
    <Carousel
      sx={{
        width: {
          xs: "95vw",
          sm: "80vw",
          md: "70vw",
        },
        height: {
          md: "80vh",
        },
      }}
    >
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default CrouselComponent;

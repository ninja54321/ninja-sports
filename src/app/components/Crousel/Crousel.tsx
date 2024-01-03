'use client'

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import Item from "./Item";
import { sliderItems } from "./content";

function CrouselComponent(props:any) {

  return (
    <Carousel sx={{height:'80vh', width: '80vw'}}>
      {sliderItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default CrouselComponent;

'use client'

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import Item from "./Item";
import { sliderItems } from "./content";

function CrouselComponent(props:any) {

  return (
    <Carousel sx={{ width: {
      xs: '95vw',
      sm: '80vw',
      md: '70vw'
    }, 
    height: {
      md: '80vh'
    }}}>
      {sliderItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default CrouselComponent;

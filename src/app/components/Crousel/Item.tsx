"use client";
import { Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Item = ({item}: any) => {

  return (
    <Paper>
      {/* <h2>{props.item.title}</h2> */}
      {/* <p>{props.item.description}</p> */}
      <Image src={item.image} style={{width: '100%' ,height: '70vh'}} alt="slider image" />

      {/* <img src={item.image} alt="" height={100} width={'100'} /> */}

      {/* <Button className="CheckButton">Check it out!</Button> */}
    </Paper>
  );
};

export default Item;

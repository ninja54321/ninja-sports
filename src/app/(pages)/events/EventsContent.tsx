"use client";
import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const EventsContent = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={10}
      m={"8rem"}
    >
      {/* <Grid container>
        <Grid item xs={6}> */}
      <Image
        src={require("../../../helper/events/Ghaziabad-district-championship.jpg")}
        style={{ height: "80vh", width: "auto" }}
        alt={""}
      />
      {/* </Grid>
        <Grid item xs={6}> */}
      <Image
        style={{ height: "80vh", width: "auto" }}
        src={require("../../../helper/events/referee-seminar.jpg")}
        alt={""}
      />
      {/* </Grid>
      </Grid> */}
    </Stack>
  );
};

export default EventsContent;

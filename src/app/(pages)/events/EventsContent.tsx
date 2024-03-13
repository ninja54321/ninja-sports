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
      <Image
        src={require("../../../helper/events/Ghaziabad-district-championship.jpg")}
        style={{ height: "80vh", width: "auto" }}
        alt={""}
      />
      <Image
        style={{ height: "80vh", width: "auto" }}
        src={require("../../../helper/events/referee-seminar.jpg")}
        alt={""}
      />
    </Stack>
  );
};

export default EventsContent;

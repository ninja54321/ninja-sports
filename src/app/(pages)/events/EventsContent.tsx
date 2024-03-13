"use client";
import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const EventsContent = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <Stack
      direction={{ sx: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      m={"8rem"}
      gap={10}
    >
      <Image
        src={require("../../../helper/events/Ghaziabad-district-championship.jpg")}
        style={{
          height: isHovered1 ? "70vh" : "60vh",
          width: "auto",
          borderRadius: "1.5rem",
          transition: "height 0.5s ease", // Adding smooth transition
        }}
        alt={""}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      />
      <Image
        style={{
          height: isHovered2 ? "80vh" : "70vh",
          width: "auto",
          borderRadius: "1.5rem",
          transition: "height 0.5s ease", // Adding smooth transition
        }}
        src={require("../../../helper/events/referee-seminar.jpg")}
        alt={""}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      />
    </Stack>
  );
};

export default EventsContent;

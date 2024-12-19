"use client";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.css";
import EventCard from "./EventCard";

const EventsContent = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <Stack>
      <Stack gap={4}>
        <Typography color="white" variant="h3" textAlign="center">
          Latest Events
        </Typography>

        <Stack
          // direction={{ sx: "column", md: "row" }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          // m={"8rem"}
          gap={10}
        >
          <EventCard img={require("../../../helper/events/event.jpg")} />
          <EventCard img={require("../../../helper/events/dec-24.jpg")} />
          <EventCard img={require("../../../helper/events/event-dec.jpg")} />
          <EventCard
            img={require("../../../helper/events/interview-event.jpg")}
          />
        </Stack>

        <Stack
          flexWrap="wrap"
          direction="row"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          <div className={styles.imageContainer}>
            <Image
              src={"/event/0.jpg"}
              width={250}
              height={250}
              style={{
                borderRadius: "1.5rem",
              }}
              alt={""}
              className={styles.image}
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src={"/event/1.jpg"}
              width={250}
              height={250}
              style={{
                borderRadius: "1.5rem",
              }}
              alt={""}
              className={styles.image}
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src={"/event/2.jpg"}
              width={250}
              height={250}
              style={{
                borderRadius: "1.5rem",
              }}
              alt={""}
              className={styles.image}
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src={"/event/5.jpg"}
              width={250}
              height={250}
              style={{
                borderRadius: "1.5rem",
              }}
              alt={""}
              className={styles.image}
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src={"/event/7.jpg"}
              width={250}
              height={250}
              style={{
                borderRadius: "1.5rem",
              }}
              alt={""}
              className={styles.image}
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src={"/event/10.jpg"}
              width={250}
              height={250}
              style={{
                borderRadius: "1.5rem",
              }}
              alt={""}
              className={styles.image}
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src={"/event/27.jpg"}
              width={250}
              height={250}
              style={{
                borderRadius: "1.5rem",
              }}
              alt={""}
              className={styles.image}
            />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src={"/event/29.jpg"}
              width={250}
              height={250}
              style={{
                borderRadius: "1.5rem",
              }}
              alt={""}
              className={styles.image}
            />
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EventsContent;

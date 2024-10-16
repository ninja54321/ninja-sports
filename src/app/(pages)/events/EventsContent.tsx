"use client";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.css";

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
          direction={{ sx: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          // m={"8rem"}
          // gap={10}
        >
          <Image
            src={require("../../../helper/events/event.jpg")}
            style={{
              height: isHovered1 ? "70vh" : "60vh",
              width: "auto",
              borderRadius: "1.5rem",
              transition: "height 0.5s ease-in-out",
            }}
            alt={""}
            className={styles.image}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          />
          {/* <Image
          style={{
            height: isHovered2 ? "80vh" : "70vh",
            width: "auto",
            borderRadius: "1.5rem",
          }}
          src={require("../../../helper/events/referee-seminar.jpg")}
          alt={""}
          className={styles.image}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        /> */}
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

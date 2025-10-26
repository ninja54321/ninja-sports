"use client";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.css";
import EventCard from "./EventCard";
import { latestImages } from "./constant";

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
          <EventCard
            img={require("../../../helper/events/chhath.jpg")}
          />
          <EventCard
            img={require("../../../helper/events/event-10-09-25.jpg")}
          />
          <EventCard
            img={require("../../../helper/events/event-30-01-2-25.jpg")}
          />
          <EventCard img={require("../../../helper/events/refree.jpg")} />
          <EventCard img={require("../../../helper/events/holi.jpg")} />
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
          {latestImages.map((image, index) => (
            <div className={styles.imageContainer} key={index}>
              <Image
                src={image}
                width={250}
                height={250}
                style={{
                  borderRadius: "1.5rem",
                }}
                alt={"event-img"}
                className={styles.image}
              />
            </div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EventsContent;

"use client";
import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

const PhotoSection = () => {
  return (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item>
        <div className={styles.imageContainer}>
          <Image
            src={require("../../../helper/ninja-img/img-14.jpg")}
            height={200}
            alt={""}
            className={styles.image}
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.imageContainer}>
          <Image
            src={require("../../../helper/ninja-img/img-15.jpg")}
            height={200}
            alt={""}
            className={styles.image}
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.imageContainer}>
          <Image
            src={require("../../../helper/ninja-img/img-16.jpg")}
            height={200}
            alt={""}
            className={styles.image}
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.imageContainer}>
          <Image
            src={require("../../../helper/ninja-img/img-17.jpg")}
            height={200}
            alt={""}
            className={styles.image}
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.imageContainer}>
          <Image
            src={require("../../../helper/ninja-img/img-18.jpg")}
            height={200}
            alt={""}
            className={styles.image}
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.imageContainer}>
          <Image
            src={require("../../../helper/ninja-img/img-19.jpg")}
            height={200}
            alt={""}
            className={styles.image}
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.imageContainer}>
          <Image
            src={require("../../../helper/ninja-img/img-20.jpg")}
            height={200}
            alt={""}
            className={styles.image}
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.imageContainer}>
          <Image
            src={require("../../../helper/ninja-img/img-21.jpg")}
            height={200}
            alt={""}
            className={styles.image}
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.imageContainer}>
          <Image
            src={require("../../../helper/ninja-img/img-22.jpg")}
            height={200}
            alt={""}
            className={styles.image}
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.imageContainer}>
          <Image
            src={require("../../../helper/ninja-img/img-24.jpg")}
            height={200}
            alt={""}
            className={styles.image}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default PhotoSection;

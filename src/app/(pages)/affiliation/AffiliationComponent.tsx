"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { Stack } from "@mui/material";

const AffiliationComponent = () => {
  const logosRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (logosRef.current) {
      const copy = logosRef.current.cloneNode(true) as HTMLDivElement;
      if (logosRef.current.parentNode) {
        logosRef.current.parentNode.appendChild(copy);
      }
    }
  }, []);

  return (
    <div className={styles.logos}>
      <Stack
        direction={"row"}
        alignItems="center"
        spacing={2}
        className={styles.logosSlide}
        ref={logosRef}
      >
        {/* <Image
          src={require("../../../helper/logo-for-slider/main-logo.png")}
          alt="logos"
          height={200}
          width={200}
        /> */}
        <Image
          src={require("../../../helper/logo-for-slider/delhi.png")}
          alt="logos"
          height={200}
          width={200}
        />
        <Image
          src={require("../../../helper/logo-for-slider/ghaziabad.png")}
          alt="logos"
          height={200}
          width={200}
        />
        <Image
          src={require("../../../helper/logo-for-slider/odisha.png")}
          alt="logos"
          height={180}
          width={180}
        />
        <Image
          src={require("../../../helper/logo-for-slider/bulandshaar.png")}
          alt="logos"
          height={200}
          width={200}
        />

        <Image
          src={require("../../../helper/logo-for-slider/jharkhand-img.png")}
          alt="logos"
          height={200}
          width={200}
        />
        <Image
          src={require("../../../helper/logo-for-slider/is-academy.png")}
          alt="logos"
          height={200}
          width={200}
        />
        <Image
          src={require("../../../helper/logo-for-slider/north-east-delhi.png")}
          alt="logos"
          height={200}
          width={200}
        />
        <Image
          src={require("../../../helper/logo-for-slider/shankhar-school.png")}
          alt="logos"
          height={200}
          width={200}
        />
        <Image
          src={require("../../../helper/logo-for-slider/up.png")}
          alt="logos"
          height={200}
          width={200}
        />
        {/* <img src="./logos/3m.svg" alt="3m" />
        <img src="./logos/barstool-store.svg" alt="Barstool Store" />
        <img src="./logos/budweiser.svg" alt="Budweiser" />
        <img src="./logos/buzzfeed.svg" alt="Buzzfeed" />
        <img src="./logos/forbes.svg" alt="Forbes" />
        <img src="./logos/macys.svg" alt="Macys" />
        <img src="./logos/menshealth.svg" alt="Mens Health" />
        <img src="./logos/mrbeast.svg" alt="Mr Beast" /> */}
      </Stack>
    </div>
  );
};

export default AffiliationComponent;

import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface IEventCardProps {
  img: string;
}

const EventCard = ({ img }: IEventCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <Image
      src={img}
      style={{
        height: isHovered ? "70vh" : "60vh",
        width: "auto",
        borderRadius: "1.5rem",
        transition: "height 0.5s ease-in-out",
      }}
      alt={""}
      className={styles.image}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default EventCard;

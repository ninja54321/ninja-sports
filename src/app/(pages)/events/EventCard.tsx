import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface IEventCardProps {
  img: string;
}

const EventCard = ({ img }: IEventCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={`${styles.eventCardContainer} ${
        isHovered ? styles.hovered : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={img} alt="" className={styles.eventCardImage} />
    </div>
  );
};

export default EventCard;

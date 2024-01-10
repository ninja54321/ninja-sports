import {
  Card,
  CardContent,
  CardHeader,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

interface IAchievementCardProps {
  img: string;
  title: string;
  date: string;
  desc: string;
}

const AchievementCard = ({ img, title, date, desc }: IAchievementCardProps) => {
  return (
    <Paper elevation={5} sx={{ borderRadius: "2rem", overflow: "hidden" }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader title={title} subheader={date} />
        <Image
          src={img}
          alt="prize-distribution"
          style={{ height: "20rem", width: "100%", objectFit: "contain" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default AchievementCard;

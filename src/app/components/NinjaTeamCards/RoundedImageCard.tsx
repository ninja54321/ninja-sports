import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

interface RoundImageCardProps {
  imageSrc: string;
  name: string;
  designation: string;
  description: string;
}

const RoundImageCard = ({
  imageSrc,
  name,
  description,
  designation,
}: RoundImageCardProps) => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Card sx={{ maxWidth: 345, padding: "1rem" }}>
        <CardActionArea>
          <Box
            overflow={"hidden"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={imageSrc}
              alt="img"
              height={200}
              width={200}
              style={{ borderRadius: "50%" }}
            />
          </Box>

          <CardContent>
            <Typography
              component="div"
              sx={{
                wordWrap: "break-word",
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                },
                fontWeight: {
                  xs: "700",
                },
              }}
            >
              {name}
            </Typography>

            <Typography
              gutterBottom
              component="div"
              sx={{
                wordWrap: "break-word",
                fontSize: {
                  xs: "0.8rem",
                  sm: "1rem",
                },
                fontWeight: {
                  xs: "700",
                },
              }}
            >
              {designation}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default RoundImageCard;
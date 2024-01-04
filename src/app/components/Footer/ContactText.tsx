import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";

const ContactText = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Image
          height={35}
          src={require("../../../helper/footer/map-marker.png")}
          alt="map-marker"
        />
        <Typography
          fontWeight={"600"}
          sx={{
            wordWrap: "break-word",
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem",
            },
          }}
        >
          A-894 NO-20, SONIA VIHAR DELHI NORTH EAST  DELHI-110094
        </Typography>
      </Box>

      <Box
        marginY={"1rem"}
        display={"flex"}
        gap={{ xs: "0.8rem", sm: "2rem" }}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <CallTwoToneIcon
            sx={{
              wordWrap: "break-word",
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
              },
            }}
          />
          <Typography
            sx={{
              wordWrap: "break-word",
              fontSize: {
                fontWeight: "600",
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
              },
            }}
          >
            01169261710
          </Typography>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <LanguageTwoToneIcon
            color="primary"
            sx={{
              wordWrap: "break-word",
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
              },
            }}
          />
          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: "600",
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
              },
            }}
          >
            www.ninjasportssgfi.com
          </Typography>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <EmailTwoToneIcon
            color="primary"
            sx={{
              wordWrap: "break-word",
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
              },
            }}
          />
          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: "600",
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "1.2rem",
              },
            }}
          >
            @ninjasportssgfi.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactText;

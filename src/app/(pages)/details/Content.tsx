"use client";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Text from "./Text";
import { FiEye } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

interface IContentProps {
  details: any;
}

interface ICertificate {
  certificateNumber: string;
  certificateName: string;
  certificateLink: string;
}

const certificates: ICertificate[] = [
  {
    certificateNumber: "1234",
    certificateName: "Sorcerer",
    certificateLink: require("../../../helper/certificate-sample.jpg"),
  },
  {
    certificateNumber: "1234",
    certificateName: "Wizard",
    certificateLink: require("../../../helper/certificate-sample.jpg"),
  },
];

const Content = ({ details }: IContentProps) => {
  const [viewCertificate, setViewCertificate] = useState<boolean>(false);
  return (
    <Box>
      <Paper elevation={4} sx={{ maxWidth: "90vw", minWidth: "50vw" }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ textDecoration: "underline" }}
        >
          Profile Details
        </Typography>

        <Stack spacing={2} padding={2}>
          <Stack
            direction={["column-reverse", "row"]}
            justifyContent={["flex-start", "space-between"]}
            alignItems={["flex-start", "center"]}
            gap={4}
          >
            <Stack spacing={1}>
              <Text
                label="Name"
                value={details?.title + " " + details?.fullName}
              />
              <Text
                label="Registration Number"
                value={details?.registrationNumber}
              />
              <Text label="Father's Name" value={details.fatherName} />
              <Text
                label="Date of birth"
                value={new Date(details?.dob).toLocaleDateString()}
              />
              <Text label="Age Category" value={details?.ageCategory} />
            </Stack>
            {details.photo && (
              <Image
                src={details?.photo}
                width={100}
                height={100}
                alt="profile image"
                style={{ borderRadius: "10px" }}
              />
            )}
          </Stack>
          <Stack spacing={1}>
            <Text label="Email" value={details?.email} />
            <Text label="Mobile Number" value={details?.mobileNumber} />
            <Text label="WhatshApp Number" value={details?.whatsAppNumber} />
            <Text label="Gender" value={details?.gender} />
            <Text label="Address" value={details?.address} />
            <Text
              label="Father's Occupation"
              value={details?.fatherOccupation}
            />
          </Stack>

          <Stack>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ textDecoration: "underline" }}
            >
              Certificates
            </Typography>

            <Stack spacing={4}>
              {certificates.map((certificate, index) => (
                <Stack key={index}>
                  <Text
                    label="Certificate Number"
                    value={certificate.certificateNumber}
                  />
                  <Text
                    label="Certificate Name"
                    value={certificate.certificateName}
                  />

                  <Stack direction="row" spacing={2} alignItems={"center"}>
                    <Typography fontWeight={700}>View Certificate:</Typography>
                    <IconButton onClick={() => setViewCertificate(true)}>
                      <FiEye color="#0077b5" fontSize={"18px"} />
                    </IconButton>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Paper>
      <Dialog
        open={viewCertificate}
        onClose={() => setViewCertificate(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ backgroundColor: "#002147" }}
        >
          <DialogTitle color={"white"} id="alert-dialog-title">
            {"Certificate"}
          </DialogTitle>
          <IconButton onClick={() => setViewCertificate(false)}>
            <IoMdClose color="white" />
          </IconButton>
        </Stack>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: "90%",
              height: "50%",
            }}
            src={require("../../../helper/certificate-sample.jpg")}
            alt="certificate"
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Content;

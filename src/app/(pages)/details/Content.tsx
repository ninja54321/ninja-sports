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
import ViewCertificate from "./ViewCertificate";

interface IContentProps {
  details: any;
}

const Content = ({ details }: IContentProps) => {
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
            <Text
              label="Gender"
              value={
                details?.gender
                  ? details.gender.charAt(0).toUpperCase() +
                    details.gender.slice(1)
                  : ""
              }
            />
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
              {details.certificates &&
                details?.certificates?.map(
                  (certificate: any, index: number) => (
                    <ViewCertificate certificate={certificate} key={index} />
                  )
                )}
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Content;

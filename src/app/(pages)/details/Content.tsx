"use client";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Text from "./Text";
import ViewEvent from "./ViewEvent";
import { getTransformedLink } from "@/utils/util-function";

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
              {details?.title && <Text label="Title" value={details.title} />}
              {details?.fullName && (
                <Text label="Name" value={details.fullName} />
              )}
              {details?.registrationNumber && (
                <Text
                  label="Registration Number"
                  value={details.registrationNumber}
                />
              )}
              {details?.fatherName && (
                <Text label="Father's Name" value={details.fatherName} />
              )}
              {details?.dob && (
                <Text
                  label="Date of birth"
                  value={new Date(details.dob).toLocaleDateString()}
                />
              )}
            </Stack>
            {details.photo && (
              <Image
                src={getTransformedLink(details.photo)}
                width={100}
                height={100}
                alt="profile image"
                style={{ borderRadius: "10px" }}
              />
            )}
          </Stack>
          <Stack spacing={1}>
            {details?.email && <Text label="Email" value={details.email} />}
            {details?.gender && <Text label="Gender" value={details.gender} />}
            {details?.state && <Text label="State" value={details.state} />}
            {details?.district && (
              <Text label="District" value={details.district} />
            )}
            {details?.institute && (
              <Text label="Institute" value={details.institute} />
            )}
            {details?.mobileNumber && (
              <Text label="MobileNumber" value={details.mobileNumber} />
            )}
            {details?.whatsAppNumber && (
              <Text label="WhatsApp Number" value={details.whatsAppNumber} />
            )}
            {details?.email && <Text label="Email" value={details.email} />}
            {details?.email && <Text label="Email" value={details.email} />}
            {details?.address && (
              <Text label="Address" value={details.address} />
            )}
            {details?.referenceCoachName && (
              <Text
                label="Reference Coach name"
                value={details.referenceCoachName}
              />
            )}
            {details?.designation && (
              <Text label="Designation" value={details.designation} />
            )}
            {details?.joiningDate && (
              <Text
                label="Joining Date"
                value={new Date(details.joiningDate).toLocaleDateString()}
              />
            )}
            {details?.expiryDate && (
              <Text
                label="Expiry Date"
                value={new Date(details.expiryDate).toLocaleDateString()}
              />
            )}
            {details?.qualification && (
              <Text label="Qualification" value={details.qualification} />
            )}
            {details?.fatherOccupation && (
              <Text
                label="Father's Occupation"
                value={details.fatherOccupation}
              />
            )}
          </Stack>

          {details.events && details.events.length !== 0 && (
            <Stack>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ textDecoration: "underline" }}
              >
                Events
              </Typography>

              <Stack spacing={4}>
                {details?.events?.map((event: any, index: number) => (
                  <ViewEvent event={event} key={index} />
                ))}
              </Stack>
            </Stack>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Content;

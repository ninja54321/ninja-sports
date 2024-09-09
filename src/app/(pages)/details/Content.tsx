"use client";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Text from "./Text";
import ViewCertificate from "./ViewCertificate";

interface IContentProps {
  details: any;
}

const Content = ({ details }: IContentProps) => {
  // Function to check and transform Google Drive link
  const getTransformedLink = (link: string) => {
    if (link.includes("drive.google.com")) {
      const extractFileIdFromGoogleDriveLink = (link: string) => {
        const regex = /\/d\/(.*?)\//;
        const match = link.match(regex);
        return match ? match[1] : "";
      };

      const fileId = extractFileIdFromGoogleDriveLink(link);
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
    return link;
  };

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
              {details?.ageCategory && (
                <Text label="Age Category" value={details.ageCategory} />
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
            {details?.mobileNumber && (
              <Text label="Mobile Number" value={details.mobileNumber} />
            )}
            {details?.whatsAppNumber && (
              <Text label="WhatsApp Number" value={details.whatsAppNumber} />
            )}
            {details?.gender && (
              <Text
                label="Gender"
                value={
                  details.gender.charAt(0).toUpperCase() +
                  details.gender.slice(1)
                }
              />
            )}
            {details?.fatherOccupation && (
              <Text
                label="Father's Occupation"
                value={details.fatherOccupation}
              />
            )}
            {details?.address && (
              <Text label="Address" value={details.address} />
            )}
            {details?.state && <Text label="State" value={details.state} />}
            {details?.district && (
              <Text label="District" value={details.district} />
            )}
            {details?.qualification && (
              <Text label="Qualification" value={details.qualification} />
            )}
            {details?.sportsExperience && (
              <Text
                label="Sports Experience"
                value={details.sportsExperience}
              />
            )}
            {details?.blackCourse !== undefined && (
              <Text
                label="Black Course"
                value={details.blackCourse ? "Yes" : "No"}
              />
            )}
            {details?.starRating && (
              <Text label="Star Rating" value={details.starRating} />
            )}
            {details?.category && (
              <Text label="Category" value={details.category} />
            )}
            {details?.club && <Text label="Club" value={details.club} />}
            {details?.academy && (
              <Text label="Academy" value={details.academy} />
            )}
            {details?.school && <Text label="School" value={details.school} />}
            {details?.award && <Text label="Award" value={details.award} />}
            {details?.position && (
              <Text label="Position" value={details.position} />
            )}
            {details?.designation && (
              <Text label="Designation" value={details.designation} />
            )}
            {details?.eventVenue && (
              <Text label="Event Venue" value={details.eventVenue} />
            )}
            {details?.eventDate && (
              <Text
                label="Event Date"
                value={new Date(details.eventDate).toLocaleDateString()}
              />
            )}
          </Stack>

          {details.certificates && details.certificates.length !== 0 && (
            <Stack>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ textDecoration: "underline" }}
              >
                Certificates
              </Typography>

              <Stack spacing={4}>
                {details?.certificates?.map(
                  (certificate: any, index: number) => (
                    <ViewCertificate certificate={certificate} key={index} />
                  )
                )}
              </Stack>
            </Stack>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Content;

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Text from "./Text";
import { FiEye } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import styles from "./styles.module.css";
import { getTransformedLink } from "@/utils/util-function";

// certificate query to add data
// db.students.updateOne(
//     { registrationNumber: "12345" },
//     { $push: { certificates: {
//         certificateNumber: "123456",
//         certificateName: "Certificate 2",
//         certificateLink: "https://res.cloudinary.com/dpjrqxwe5/image/upload/v1713013574/certificate-sample_v0flb6.jpg"
//       }
//     }
//   })

interface ICertificate {
  certificateNumber: string;
  certificateName: string;
  certificateLink: string;
  award: string;
  position: string;
  designation: string;
  eventVenue: string;
  eventDate: Date;
}

// const certificates: ICertificate[] = [
//   {
//     certificateNumber: "1234",
//     certificateName: "Sorcerer",
//     certificateLink: require("../../../helper/certificate-sample.jpg"),
//   },
//   {
//     certificateNumber: "1234",
//     certificateName: "Wizard",
//     certificateLink: require("../../../helper/certificate-sample.jpg"),
//   },
// ];

interface IViewEventProps {
  event: any;
}

const ViewCertificate = ({ event }: IViewEventProps) => {
  const [viewCertificate, setViewCertificate] = useState<boolean>(false);
  return (
    <Stack>
      {event?.event && <Text label="Event" value={event.event} />}
      {event?.weightCategory && (
        <Text label="Weight Category" value={event.weightCategory} />
      )}
      {event?.ageCategory && (
        <Text label="Age Category" value={event.ageCategory} />
      )}
      {event?.award && <Text label="Award" value={event.award} />}
      {event?.position && <Text label="Position" value={event.position} />}
      {event?.eventState && <Text label="State" value={event.eventState} />}
      {event?.eventDistrict && (
        <Text label="District" value={event.eventDistrict} />
      )}
      {event?.eventSchool && <Text label="School" value={event.eventSchool} />}
      {event?.eventAcademy && (
        <Text label="Academy" value={event.eventAcademy} />
      )}
      {event?.designation && (
        <Text label="Designation" value={event.designation} />
      )}
      {event?.eventVenue && (
        <Text label="Event Venue" value={event.eventVenue} />
      )}
      {event?.eventDate && (
        <Text
          label="Event Date"
          value={new Date(event.eventDate).toLocaleDateString()}
        />
      )}
      {event.certificateNumber && (
        <Text label="Certificate Number" value={event.certificateNumber} />
      )}
      {event.certificateName && (
        <Text label="Certificate Name" value={event.certificateName} />
      )}
      {event?.certificateLink && (
        <>
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <Typography fontWeight={700}>View Certificate:</Typography>
            <IconButton onClick={() => setViewCertificate(true)}>
              <FiEye color="#0077b5" fontSize={"18px"} />
            </IconButton>
          </Stack>
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
                className={styles.customCertificate}
                src={getTransformedLink(event?.certificateLink)}
                width={800}
                height={800}
                alt="certificate"
              />
            </DialogContent>
          </Dialog>
        </>
      )}
    </Stack>
  );
};

export default ViewCertificate;

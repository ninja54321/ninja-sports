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

interface IViewCertificateProps {
  certificate: ICertificate;
}

const ViewCertificate = ({ certificate }: IViewCertificateProps) => {
  const [viewCertificate, setViewCertificate] = useState<boolean>(false);
  return (
    <Stack>
      <Text label="Certificate Number" value={certificate.certificateNumber} />
      <Text label="Certificate Name" value={certificate.certificateName} />

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
            src={getTransformedLink(certificate?.certificateLink)}
            width={800}
            height={800}
            alt="certificate"
          />
        </DialogContent>
      </Dialog>
    </Stack>
  );
};

export default ViewCertificate;

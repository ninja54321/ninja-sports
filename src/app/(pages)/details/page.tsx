"use client";
import { IntroSection, MidNavbar, Navbar } from "@/app/components";
import ContactText from "@/app/components/Footer/ContactText";
import { Box } from "@mui/material";
import Content from "./Content";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

interface IDetailsPageProps {
  registrationNumber: number | string;
}

const DetailsPage = () => {
  const searchParms = useSearchParams();
  const registrationNumber = searchParms.get("registrationNumber");
  const type = searchParms.get("type");
  const [details, setDetails] = useState<any>(null);
  const fetchDetails = async () => {
    try {
      const res = await axios.get(
        `api/search?registrationNumber=${registrationNumber}&type=${type}`
      );
      setDetails(res.data);
    } catch (error) {
      console.log(error);
      toast.error("No result found please enter correct details", {
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <main style={{ backgroundColor: "#82b9d1", minHeight: "100vh" }}>
      <Navbar />
      <IntroSection />
      <Box mt={"2.4rem"}>
        <MidNavbar />
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"1rem"}
      >
        <Content details={details} />
      </Box>
      <ContactText />
    </main>
  );
};

export default DetailsPage;

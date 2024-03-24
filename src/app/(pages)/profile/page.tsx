"use client";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("");
  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/user");
    console.log(res.data.data.user);
  };
  return (
    <div>
      <Typography>Profile</Typography>
      <Button onClick={handleLogout}>Logout</Button>
      <Typography>{data || ""}</Typography>
    </div>
  );
};

export default Profile;

import { Stack, Typography } from "@mui/material";
import React from "react";

interface UserProfileProps {
  params: {
    id: string;
  };
}

const UserProfile = ({ params }: UserProfileProps) => {
  return (
    <Stack>
      <Typography>{params.id}</Typography>
    </Stack>
  );
};

export default UserProfile;

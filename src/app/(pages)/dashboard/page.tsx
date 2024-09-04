"use client";
import { Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { PiStudentDuotone } from "react-icons/pi";
import { MdOutlineAppRegistration } from "react-icons/md";
import StudentTable from "./StudentTable";
import NationalRegistrationTable from "./NationalRegistrationTable";

const DashBoard: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case 0:
        return <StudentTable />;
      case 1:
        return <NationalRegistrationTable />;
      default:
        return null;
    }
  };

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Tabs value={value} onChange={handleTabChange}>
        <Tab
          icon={<PiStudentDuotone fontSize={24} />}
          label="Student Details"
        />
        <Tab
          icon={<MdOutlineAppRegistration fontSize={24} />}
          label="National Registration"
        />
      </Tabs>
      {renderContent()}
    </Stack>
  );
};

export default DashBoard;

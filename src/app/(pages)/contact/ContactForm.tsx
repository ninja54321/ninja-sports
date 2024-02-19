"use client";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const ContactForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    alert("Message has been sent");
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "white",
          padding: "4rem",
          borderRadius: "2rem",
        }}
      >
        <Typography color={'#1976d2'} fontWeight={700} fontSize={'1.5rem'}>Send a message</Typography>

        <Stack direction={"row"} gap={2}>
          <TextField
            required
            label="First Name"
            type="text"
            variant="outlined"
            InputLabelProps={{
              style: { color: "#1976d2" },
            }}
          />
          <TextField
            required
            label="Last Name"
            type="text"
            variant="outlined"
            InputLabelProps={{
              style: { color: "#1976d2" },
            }}
          />
        </Stack>

        <Stack direction={"row"} gap={2}>
          <TextField
            required
            label="Email"
            type="email"
            variant="outlined"
            InputLabelProps={{
              style: { color: "#1976d2" },
            }}
          />
          <TextField
            type="number"
            required
            label="Phone Number"
            variant="outlined"
            InputLabelProps={{
              style: { color: "#1976d2" },
            }}
            inputProps={{
              min: 0,
            }}
          />
        </Stack>
          <TextField fullWidth
            InputLabelProps={{
              style: { color: "#1976d2" },
            }}
            required
            label="Message"
            variant="outlined"
            multiline
            rows={4}
          />
        <Box>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Send Message
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default ContactForm;

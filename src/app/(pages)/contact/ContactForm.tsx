"use client";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
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
      <FormControl sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <TextField
            required
            label="Email"
            type="email"
            variant="outlined"
            InputLabelProps={{
              style: { color: "#002147" },
            }}
          />
        </Box>
        <Box>
          <TextField
            type="number"
            required
            label="Phone Number"
            variant="outlined"
            InputLabelProps={{
              style: { color: "#002147" },
            }}
            inputProps={{
              min: 0,
            }}
          />
        </Box>
        <Box>
          <TextField
            InputLabelProps={{
              style: { color: "#002147" },
            }}
            required
            label="Message"
            variant="outlined"
            multiline
            rows={4}
          />
        </Box>
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

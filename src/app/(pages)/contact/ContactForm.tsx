"use client";

import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string | number;
  message: string;
}

const initialValues: IFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  message: "",
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit, control, watch, reset } = useForm<IFormValues>({
    defaultValues: initialValues,
  });

  const onSubmit = async (values: IFormValues) => {
    setIsLoading(true);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const res = await axios.post("/api/sendMessage", formData);
      toast.info("Message has been sent successfully", { autoClose: 1000 });
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      toast.error(
        error.response.data.message || "Error Occured please try again later",
        {
          autoClose: 1500,
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        padding={{
          xs: "2rem",
          md: "4rem",
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "white",
          borderRadius: "2rem",
        }}
      >
        <Typography color={"#1976d2"} fontWeight={700} fontSize={"1.5rem"}>
          Send a message
        </Typography>

        <Stack
          direction={{
            sx: "column",
            md: "row",
          }}
          gap={2}
        >
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                required
                label="First Name"
                type="text"
                variant="outlined"
                InputLabelProps={{
                  style: { color: "#1976d2" },
                }}
                value={field.value}
                onChange={(e) => field.onChange((field.value = e.target.value))}
                helperText={fieldState.error ? fieldState.error.message : ""}
                error={Boolean(fieldState.error)}
              />
            )}
          />
          <Controller
            name="lastName"
            rules={{ required: true }}
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                required
                label="Last Name"
                type="text"
                variant="outlined"
                InputLabelProps={{
                  style: { color: "#1976d2" },
                }}
                value={field.value}
                onChange={(e) => field.onChange((field.value = e.target.value))}
                helperText={fieldState.error ? fieldState.error.message : ""}
                error={Boolean(fieldState.error)}
              />
            )}
          />
        </Stack>

        <Stack
          direction={{
            sx: "column",
            md: "row",
          }}
          gap={2}
        >
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                required
                label="Email"
                type="email"
                variant="outlined"
                InputLabelProps={{
                  style: { color: "#1976d2" },
                }}
                value={field.value}
                onChange={(e) => field.onChange((field.value = e.target.value))}
                helperText={fieldState.error ? fieldState.error.message : ""}
                error={Boolean(fieldState.error)}
              />
            )}
          />
          <Controller
            name="mobileNumber"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <TextField
                required
                label="Phone Number"
                type="number"
                variant="outlined"
                InputLabelProps={{
                  style: { color: "#1976d2" },
                }}
                inputProps={{
                  min: 0,
                }}
                value={field.value}
                onChange={(e) => field.onChange((field.value = e.target.value))}
                helperText={fieldState.error ? fieldState.error.message : ""}
                error={Boolean(fieldState.error)}
              />
            )}
          />
        </Stack>

        <Controller
          name="message"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              fullWidth
              InputLabelProps={{
                style: { color: "#1976d2" },
              }}
              required
              label="Message"
              variant="outlined"
              multiline
              value={field.value}
              onChange={(e) => field.onChange((field.value = e.target.value))}
              helperText={fieldState.error ? fieldState.error.message : ""}
              error={Boolean(fieldState.error)}
              rows={4}
            />
          )}
        />
        <Box>
          <Button
            type="submit"
            variant="contained"
            endIcon={
              isLoading ? (
                <CircularProgress style={{ color: "white" }} size={18} />
              ) : (
                <SendIcon />
              )
            }
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default ContactForm;

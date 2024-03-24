"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

interface IFormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: IFormValues = {
  name: "",
  email: "",
  password: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit, control } = useForm<IFormValues>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: IFormValues) => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/users/signup", values);
      toast.info("OTP has been sent to the email", { autoClose: 1000 });
      setIsLoading(false);
      router.push(`/verifyOtp?userId=${encodeURIComponent(res.data._id)}`);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      toast.error(
        error.response.data.message || "Error Occured please try again later",
        {
          autoClose: 1000,
        }
      );
    }
  };

  return (
    <main
      style={{
        // backgroundColor: "#82b9d1",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginTop: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      name="name"
                      fullWidth
                      label="Full Name *"
                      autoFocus
                      value={field.value}
                      onChange={(e) =>
                        field.onChange((field.value = e.target.value))
                      }
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                      error={Boolean(fieldState.error)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      label="Email Address *"
                      name="email"
                      autoComplete="email"
                      value={field.value}
                      onChange={field.onChange}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                      error={Boolean(fieldState.error)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="password"
                      label="Password *"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={field.value}
                      onChange={field.onChange}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                      error={Boolean(fieldState.error)}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              endIcon={
                isLoading && (
                  <CircularProgress
                    size={18}
                    style={{
                      color: "white",
                    }}
                  />
                )
              }
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </main>
  );
};

export default SignUp;

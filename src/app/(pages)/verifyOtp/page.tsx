"use client";
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
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

const VerifyOTP = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit, control } = useForm({
    defaultValues: { otp: "" },
  });
  const searchParams = useSearchParams();

  const onSubmit = async (values: { otp: string }) => {
    try {
      setIsLoading(true);
      await axios.put("/api/users/verifyEmail", {
        ...values,
        userId: searchParams.get("userId"),
      });

      toast.info("OTP verified successfully", { autoClose: 500 });
      setIsLoading(false);
      setTimeout(() => {
        router.push("/login");
      }, 500);
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
    <main style={{ minHeight: "100vh", overflow: "hidden" }}>
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
            Verify OTP
          </Typography>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginTop: "2rem" }}
          >
            <Controller
              name="otp"
              control={control}
              rules={{ required: "OTP is required" }}
              render={({ field, fieldState }) => (
                <TextField
                  name="otp"
                  required
                  type="number"
                  fullWidth
                  label="Enter OTP"
                  autoFocus
                  value={field.value}
                  onChange={(e) =>
                    field.onChange((field.value = e.target.value))
                  }
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />
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
              Verify
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </main>
  );
};

export default VerifyOTP;

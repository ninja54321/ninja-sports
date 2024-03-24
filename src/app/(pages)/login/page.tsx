"use client";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormValues {
  email: string;
  password: string;
}

const initialState: IFormValues = {
  email: "",
  password: "",
};
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit, control } = useForm<IFormValues>({
    defaultValues: initialState,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: IFormValues) => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/users/login", values);
      setIsLoading(false);
      toast.info("Login Successful", { autoClose: 1000 });
      localStorage.setItem("token", res.data.token);
      router.push("/");
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
          Sign In
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
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
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signup">Not have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

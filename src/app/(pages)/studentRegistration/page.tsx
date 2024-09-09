"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { SiGoogleforms } from "react-icons/si";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import axios from "axios";
import { fetchStudent } from "@/front-end-apis/student";
import { IFormValues } from "./interface";
import { initialValues } from "./constant";

const StudentRegistration = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit, control, watch, reset } = useForm<IFormValues>({
    defaultValues: initialValues,
  });
  const searchParams = useSearchParams();
  const [initialLoading, setInitialLoading] = useState<boolean>(false);

  const onSubmit = async (values: IFormValues) => {
    setIsLoading(true);
    try {
      const registrationNumber = searchParams.get("registrationNumber");

      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value.toString());
        }
      });

      let res;
      if (registrationNumber) {
        res = await axios.put(`/api/students/details`, formData);
        toast.info("Student details updated successfully", { autoClose: 1000 });
      } else {
        res = await axios.post("/api/students/details", formData);
        toast.info("Student details added successfully", { autoClose: 1000 });
        reset();
      }

      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      toast.error(
        error.response.data.message || "Error Occured please try again later",
        {
          autoClose: 2000,
        }
      );
    }
  };
  useEffect(() => {
    const registrationNumber = searchParams.get("registrationNumber");
    if (registrationNumber) {
      setInitialLoading(true);
      fetchStudent(registrationNumber)
        .then((res) => {
          const data = res.data;
          if (data) {
            reset({
              ...initialValues,
              ...data,
              dob: data.dob ? new Date(data.dob) : initialValues.dob,
              eventDate: data.eventDate
                ? new Date(data.eventDate)
                : initialValues.eventDate,
            });
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    }
  }, []);
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
            <SiGoogleforms />
          </Avatar>
          <Typography component="h1" variant="h5">
            Submit Student Information
          </Typography>
          {initialLoading ? (
            <CircularProgress />
          ) : (
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              style={{ marginTop: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="registrationNumber"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        name="registrationNumber"
                        fullWidth
                        type="text"
                        label="Registration Number *"
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
                    name="title"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="title"
                        label="Title "
                        type="text"
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
                    name="fullName"
                    control={control}
                    // rules={{ required: "true" }}
                    render={({ field, fieldState }) => (
                      <TextField
                        name="fullName"
                        fullWidth
                        label="Full Name "
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
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        label="Email Address "
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
                    name="mobileNumber"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="mobileNumber"
                        label="MobileNumber "
                        type="number"
                        id="mobileNumber"
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
                    name="whatsAppNumber"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="whatsAppNumber"
                        label="whatsAppNumber"
                        type="number"
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
                    name="fatherName"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="fatherName"
                        label="Father's Name "
                        type="text"
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
                    name="dob"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Date of birth "
                          value={field.value || null}
                          onChange={(newValue) => field.onChange(newValue)}
                        />
                      </LocalizationProvider>
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="qualification"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="qualification"
                        label="Qualification "
                        type="text"
                        multiline={true}
                        rows={2}
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
                    name="gender"
                    // rules={{ required: true }}
                    control={control}
                    render={({ field, fieldState }) => {
                      return (
                        <FormControl>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Gender
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="gender"
                            onChange={(e) => field.onChange(e.target.value)}
                            value={field.value}
                          >
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                              label="Female"
                            />
                            <FormControlLabel
                              value="male"
                              control={<Radio />}
                              label="Male"
                            />
                            <FormControlLabel
                              value="other"
                              control={<Radio />}
                              label="Other"
                            />
                          </RadioGroup>
                        </FormControl>
                      );
                    }}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                <Controller
                  name="ageCategory"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="ageCategory"
                      label="Age Category "
                      type="text"
                      value={field.value}
                      onChange={field.onChange}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                      error={Boolean(fieldState.error)}
                    />
                  )}
                />
              </Grid> */}
                <Grid item xs={12}>
                  <Controller
                    name="category"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="category"
                        label="Category "
                        type="text"
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
                    name="state"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="state"
                        label="State "
                        type="text"
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
                    name="district"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="district"
                        label="District "
                        type="text"
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
                    name="address"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="address"
                        label="Address "
                        type="text"
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
                    name="fatherOccupation"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="fatherOccupation"
                        label="Father Occupation "
                        type="text"
                        multiline
                        rows={2}
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
                    name="club"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="club"
                        label="Club "
                        type="text"
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
                    name="academy"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="academy"
                        label="Academy "
                        type="text"
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
                    name="school"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="school"
                        label="School "
                        type="text"
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
                    name="award"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="award"
                        label="Award "
                        type="text"
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
                    name="position"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="position"
                        label="Position "
                        type="text"
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
                    name="designation"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="designation"
                        label="Designation "
                        type="text"
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
                    name="eventVenue"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        name="eventVenue"
                        label="Event Venue "
                        type="text"
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
                    name="eventDate"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, fieldState }) => (
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Event Date"
                          value={field.value || null}
                          onChange={(newValue) => field.onChange(newValue)}
                        />
                      </LocalizationProvider>
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    name="photo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files && e.target.files[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
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
                disabled={isLoading}
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
                Submit Info
              </Button>
            </form>
          )}
        </Box>
      </Container>
    </main>
  );
};

export default StudentRegistration;

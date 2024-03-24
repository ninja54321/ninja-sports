"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SiGoogleforms } from "react-icons/si";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

interface IFormValues {
  fullName: string;
  mobileNumber: string;
  whatsAppNumber: string;
  fathersName: string;
  dob: Date;
  qualification: string;
  email: string;
  gender: string;
  state: string;
  district: string;
  address: string;
  fatherOccupation: string;
  sportsExperience: string;
  optionToLearn: string[];
  consent: string;
  blackCourse: boolean;
  img: string;
  starRating: string;
  title: string;
  ageCategory: string;
  certificateNumber: string;
}

const initialValues: IFormValues = {
  fullName: "",
  mobileNumber: "",
  whatsAppNumber: "",
  fathersName: "",
  dob: new Date(),
  qualification: "",
  email: "",
  gender: "",
  state: "",
  district: "",
  address: "",
  fatherOccupation: "",
  sportsExperience: "",
  optionToLearn: [],
  consent: "",
  blackCourse: false,
  img: "",
  starRating: "",
  title: "",
  ageCategory: "",
  certificateNumber: "",
};

// const schema = yup.object().shape({
//   fullName: yup.string().required("Full Name is required"),
//   mobileNumber: yup
//     .string()
//     .required("Mobile Number is required")
//     .matches(/^\d{10}$/, "Mobile Number must be 10 digits long"),
//   whatsAppNumber: yup
//     .string()
//     .required("WhatsApp Number is required")
//     .matches(/^\d{10}$/, "WhatsApp Number must be 10 digits long"),
//   fathersName: yup.string().required("Father's Name is required"),
//   dob: yup.date().required("Date of Birth is required"),
//   qualification: yup.string().required("Qualification is required"),
//   email: yup
//     .string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   gender: yup.string().required("Gender is required"),
//   state: yup.string().required("State is required"),
//   district: yup.string().required("District is required"),
//   address: yup.string().required("Address is required"),
//   fatherOccupation: yup.string().required("Father's Occupation is required"),
//   sportsExperience: yup.string().required("Sports Experience is required"),
//   optionToLearn: yup
//     .array()
//     .of(yup.string())
//     .required("Option to Learn is required"),
//   consent: yup.string().required("Consent is required"),
//   blackCourse: yup.boolean().required("Black Course is required"),
//   img: yup.string().required("Image is required"),
//   starRating: yup.string().required("Star Rating is required"),
// });

const StudentRegistration = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit, control, watch } = useForm<IFormValues>({
    defaultValues: initialValues,
    // resolver: yupResolver(schema),
  });

  const onSubmit = async (values: IFormValues) => {
    try {
      console.log(values);
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
            <SiGoogleforms />
          </Avatar>
          <Typography component="h1" variant="h5">
            Submit Student Information
          </Typography>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginTop: 3 }}
          >
            {/* <Grid container spacing={2}> */}

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="certificateNumber"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      name="certificateNumber"
                      fullWidth
                      label="Certificate Number *"
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
                  name="fullName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      name="fullName"
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
                  name="mobileNumber"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="mobileNumber"
                      label="MobileNumber *"
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
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="whatsAppNumber"
                      label="whatsAppNumber *"
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
                  name="fathersName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="fathersName"
                      label="Father's Name *"
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
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Father's Name"
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
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="qualification"
                      label="Qualification *"
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
                  rules={{ required: true }}
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
              <Grid item xs={12}>
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="title"
                      label="Title/Designation *"
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
                  name="ageCategory"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="ageCategory"
                      label="Age Category *"
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
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="state"
                      label="State *"
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
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="district"
                      label="District *"
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
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="address"
                      label="Address *"
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
                  rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="fatherOccupation"
                      label="Father Occupation *"
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
              Submit Info
            </Button>
          </form>
        </Box>
      </Container>
    </main>
  );
};

export default StudentRegistration;

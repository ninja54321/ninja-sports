"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
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
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SiGoogleforms } from "react-icons/si";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import axios from "axios";

interface IFormValues {
  email: string;
  playerName: string;
  fatherName: string;
  dob: Date;
  mobileNumber: string;
  gender: string;
  category: string;
  weight: string;
  coachName: string;
  district: string;
  state: string;
  playedNinjaEvent: boolean;
  adharFront: any;
  adharBack: any;
  photo: any;
}

const initialValues: IFormValues = {
  email: "",
  playerName: "",
  fatherName: "",
  dob: new Date(),
  mobileNumber: "",
  gender: "",
  category: "",
  weight: "",
  coachName: "",
  district: "",
  state: "",
  playedNinjaEvent: false,
  adharFront: null,
  adharBack: null,
  photo: null,
};

const NationalRegistration = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit, control, watch, reset } = useForm<IFormValues>({
    defaultValues: initialValues,
  });

  const onSubmit = async (values: IFormValues) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value);
        });
        const res = await axios.post("/api/national/create", formData);
        toast.info("Details added succesfully", { autoClose: 1000 });
        setIsLoading(false);
        // reset();
      console.log(values);
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
            National Registration
          </Typography>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginTop: 3 }}
          >
            <Grid container spacing={2}>
              {/* <Grid item xs={12}>
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
              </Grid> */}
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="email"
                      label="Email "
                      type="email"
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
                  name="playerName"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="playerName"
                      label="Player Name "
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
                  name="fatherName"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="fatherName"
                      label="Father Name "
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
                  name="mobileNumber"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="mobileNumber"
                      label="Mobile Number"
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

              <Grid item xs={12}>
                <Controller
                  name="category"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={field.value}
                        label="Age"
                        onChange={field.onChange}
                      >
                        <MenuItem value={"under-10"}>Under 10 Years</MenuItem>
                        <MenuItem value={"sub-junior-1"}>
                          Sub-Junior-I (10 to 12 years)
                        </MenuItem>
                        <MenuItem value={"sub-junior-2"}>
                          Sub-Junior-I (12 to 15 years)
                        </MenuItem>
                        <MenuItem value={"junior"}>
                          Junior (15 to 17 years)
                        </MenuItem>
                        <MenuItem value={"senior-1"}>
                          Senior-I (17 to 19 years)
                        </MenuItem>
                        <MenuItem value={"senior-2"}>
                          Senior-II (Above 19)
                        </MenuItem>
                        <MenuItem value={"man"}>Man</MenuItem>
                        <MenuItem value={"woman"}>Woman</MenuItem>
                        <MenuItem value={"other"}>Other</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="weight"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="weight"
                      label="Weight in Kg"
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
                  name="coachName"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field, fieldState }) => (
                    <TextField
                      fullWidth
                      name="coachName"
                      label="Coach Name"
                      type="string"
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
                      label="District"
                      type="string"
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
                      label="State"
                      type="string"
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
                  name="playedNinjaEvent"
                  // rules={{ required: true }}
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Have you ever played any Ninja sports martial art
                          event before ?
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue={false}
                          name="playedNinjaEvent"
                          onChange={(e) => field.onChange(e.target.value)}
                          value={field.value}
                          sx={{ flexDirection: "row", gap: "4px" }}
                        >
                          <FormControlLabel
                            value={true}
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value={false}
                            control={<Radio />}
                            label={"No"}
                          />
                        </RadioGroup>
                      </FormControl>
                    );
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="adharFront"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Stack>
                      <Typography>Adhar Front Upload</Typography>
                      <input
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files && e.target.files[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
                      />
                    </Stack>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="adharBack"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Stack>
                      <Typography>Adhar Back Upload</Typography>

                      <input
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files && e.target.files[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
                      />
                    </Stack>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="photo"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Stack>
                      <Typography>Photo Upload</Typography>

                      <input
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files && e.target.files[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
                      />
                    </Stack>
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

export default NationalRegistration;

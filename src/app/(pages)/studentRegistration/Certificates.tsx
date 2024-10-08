import React from "react";
import { useFieldArray, Controller } from "react-hook-form";
import {
  Button,
  TextField,
  Stack,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

const Certificates = ({ control }: any) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "certificates",
  });

  return (
    <Stack spacing={2} marginTop="4rem">
      <Typography textAlign="center">Certificates</Typography>
      {fields.map((item, index) => (
        <Paper
          key={item.id}
          sx={{
            position: "relative",
            padding: 2,
            backgroundColor: "#e0e0e0", // Cool grey background
            width: "100%",
          }}
        >
          <IconButton
            onClick={() => remove(index)}
            color="error"
            sx={{
              cursor: "pointer",
              position: "absolute",
              top: 8,
              right: "-40px",
            }}
          >
            <Remove />
          </IconButton>
          <Stack spacing={2}>
            <Controller
              name={`certificates.${index}.award`}
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
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`certificates.${index}.position`}
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
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`certificates.${index}.designation`}
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
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`certificates.${index}.eventVenue`}
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
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`certificates.${index}.eventDate`}
              control={control}
              // rules={{ required: true }}
              render={({ field, fieldState }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Event Date"
                    value={new Date(field.value) || ""}
                    onChange={(newValue) => field.onChange(newValue)}
                  />
                </LocalizationProvider>
              )}
            />

            <Controller
              name={`certificates.${index}.certificateNumber`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Certificate Number"
                  variant="outlined"
                  fullWidth
                />
              )}
            />

            <Controller
              name={`certificates.${index}.certificateName`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Certificate Name"
                  variant="outlined"
                  fullWidth
                />
              )}
            />

            <Controller
              name={`certificates.${index}.certificateLink`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Certificate Link"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Stack>
        </Paper>
      ))}
      <Button
        type="button"
        onClick={() =>
          append({
            certificateNumber: "",
            certificateName: "",
            certificateLink: "",
          })
        }
        startIcon={<Add />}
      >
        Add Certificate
      </Button>
    </Stack>
  );
};

export default Certificates;

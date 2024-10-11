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

const Events = ({ control }: any) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "events",
  });

  return (
    <Stack spacing={2} marginTop="4rem">
      <Typography textAlign="center">Events</Typography>
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
              name={`events.${index}.event`}
              control={control}
              // rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  name="Event"
                  label="Event "
                  type="text"
                  value={field.value || ""}
                  onChange={field.onChange}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`events.${index}.weightCategory`}
              control={control}
              // rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  name="Weight Category"
                  label="Weight Category "
                  type="text"
                  value={field.value || ""}
                  onChange={(e) =>
                    field.onChange((field.value = e.target.value.trim()))
                  }
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`events.${index}.ageCategory`}
              control={control}
              // rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  name="age Category"
                  label="Age Category "
                  type="text"
                  value={field.value || ""}
                  onChange={(e) =>
                    field.onChange((field.value = e.target.value.trim()))
                  }
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`events.${index}.position`}
              control={control}
              // rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  name="position"
                  label="Position "
                  type="text"
                  value={field.value || ""}
                  onChange={field.onChange}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`events.${index}.award`}
              control={control}
              // rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  name="award"
                  label="Award "
                  type="text"
                  value={field.value || ""}
                  onChange={field.onChange}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`events.${index}.eventState`}
              control={control}
              // rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  name="eventState"
                  label="State"
                  type="text"
                  value={field.value || ""}
                  onChange={field.onChange}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`events.${index}.eventDistrict`}
              control={control}
              // rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  name="eventDistrict"
                  label="District"
                  type="text"
                  value={field.value || ""}
                  onChange={field.onChange}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`events.${index}.eventSchool`}
              control={control}
              // rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  name="eventSchool"
                  label="School"
                  type="text"
                  value={field.value || ""}
                  onChange={field.onChange}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`events.${index}.eventAcademy`}
              control={control}
              // rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  name="eventAcademy"
                  label="Academy"
                  type="text"
                  value={field.value || ""}
                  onChange={field.onChange}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`events.${index}.designation`}
              control={control}
              // rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  name="designation"
                  label="Designation "
                  type="text"
                  value={field.value || ""}
                  onChange={field.onChange}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`events.${index}.eventVenue`}
              control={control}
              // rules={{ required: true }}
              render={({ field, fieldState }) => (
                <TextField
                  fullWidth
                  name="eventVenue"
                  label="Event Venue "
                  type="text"
                  value={field.value || ""}
                  onChange={field.onChange}
                  helperText={fieldState.error ? fieldState.error.message : ""}
                  error={Boolean(fieldState.error)}
                />
              )}
            />

            <Controller
              name={`events.${index}.eventDate`}
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
              name={`events.${index}.certificateNumber`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  value={field.value || ""}
                  label="Certificate Number"
                  variant="outlined"
                  fullWidth
                />
              )}
            />

            <Controller
              name={`events.${index}.certificateName`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  value={field.value || ""}
                  label="Certificate Name"
                  variant="outlined"
                  fullWidth
                />
              )}
            />

            <Controller
              name={`events.${index}.certificateLink`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  value={field.value || ""}
                  label="Certificate Link"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Stack>
        </Paper>
      ))}
      <Button type="button" onClick={() => append({})} startIcon={<Add />}>
        Add Events
      </Button>
    </Stack>
  );
};

export default Events;

import {
  IconButton,
  MenuItem,
  Popover,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const searchType = ["student", "referee"];

const SearchBar = () => {
  const [searchAnchorEl, setSearchAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);
  return (
    <Stack>
      <IconButton onClick={(event) => setSearchAnchorEl(event.currentTarget)}>
        <BiSearch color="white" />
      </IconButton>
      <Popover
        open={Boolean(searchAnchorEl)}
        anchorEl={searchAnchorEl}
        onClose={() => setSearchAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack sx={{ padding: "8px" }} gap={2}>
          <Typography>Enter Registration Number to search</Typography>
          <Stack direction="row" spacing={2}>
            <Select value={"Student"} onChange={(value) => console.log(value)}>
              {searchType.map((value, index) => (
                <MenuItem key={index} value={value}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </MenuItem>
              ))}
            </Select>
            <TextField
              placeholder="Enter registration number"
              type="number"
              InputProps={{
                endAdornment: (
                  <IconButton type="button" aria-label="search" edge="end">
                    <CiSearch />
                  </IconButton>
                ),
              }}
            />
          </Stack>
        </Stack>
      </Popover>
    </Stack>
  );
};

export default SearchBar;

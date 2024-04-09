import {
  IconButton,
  MenuItem,
  Popover,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const searchType = ["student", "referee"];

const SearchBar = () => {
  const [type, setType] = useState<string>("student");
  const [registrationNumber, setRegistrationNumber] = useState<number | string>(
    ""
  );
  const [searchAnchorEl, setSearchAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const handleSearch = () => {
    // Handle search here using selectedSearchType and registrationNumber
    console.log("Search type:", type);
    console.log("Registration number:", registrationNumber);
  };
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
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              {searchType.map((value, index) => (
                <MenuItem key={index} value={value}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </MenuItem>
              ))}
            </Select>
            <TextField
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Enter registration number"
              type="number"
              onChange={(event) => setRegistrationNumber(event.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton
                    type="button"
                    aria-label="search"
                    edge="end"
                    onClick={handleSearch}
                  >
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

import React, { useEffect, useState } from "react";
import "react-data-grid/lib/styles.css";
import DataGrid, { renderHeaderCell } from "react-data-grid";
import {
  Button,
  CircularProgress,
  IconButton,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { fetchStudentsDetails } from "@/front-end-apis/student";
import { FaPencilAlt } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import StatusUpdate from "./StatusUpdate";
import styles from "./styles.module.css";
import { MdDelete } from "react-icons/md";
import DeleteDetails from "./DeleteDetails";
import { BiSearch } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const StudentTable = () => {
  const [studentData, setStudentData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [searchAnchorEl, setSearchAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);
  const searchParams = useSearchParams();
  const [registrationNumber, setRegistrationNumber] = useState<string>("");

  const handleEdit = (studentId: string) => {
    router.push(`/studentRegistration?id=${studentId}`);
  };

  const fetchData = async (registrationNumber: string | null) => {
    setIsLoading(true);
    const data = await fetchStudentsDetails(page, limit, registrationNumber);
    setIsLoading(false);
    if (data) {
      setStudentData(data.data);
    }
  };

  const handleRegistrationSearch = () => {
    const params = new URLSearchParams(window.location.search);
    if (registrationNumber.trim()) {
      params.set("registrationNumber", registrationNumber);
    } else {
      params.delete("registrationNumber");
    }
    router.push(`?${params.toString()}`);
  };

  const handleDelete = (studentId: string) => {
    console.log(studentId, "student id to be deleted");
  };

  useEffect(() => {
    setRegistrationNumber(searchParams.get("registrationNumber") || "");
    fetchData(searchParams.get("registrationNumber"));
  }, [page, limit, searchParams]);

  const columns = [
    {
      key: "registrationNumber",
      name: "Registration Number",
      renderHeaderCell: () => (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
          className={styles.commonCellStyle}
        >
          <Typography variant="body1">Registration Number</Typography>
          <IconButton
            onClick={(event) => setSearchAnchorEl(event.currentTarget)}
          >
            <BiSearch size={20} />
          </IconButton>
        </Stack>
      ),
      renderCell: ({ row }: any) => (
        <Stack className={styles.commonCellStyle}>
          <Typography textAlign="center">{row.registrationNumber}</Typography>
        </Stack>
      ),
    },
    {
      key: "fullName",
      name: "Full Name",
      renderHeaderCell: () => (
        <Stack className={styles.commonCellStyle}>
          <Typography textAlign="center">Full Name</Typography>
        </Stack>
      ),
      renderCell: ({ row }: any) => (
        <Stack className={styles.commonCellStyle}>
          <Typography textAlign="center">{row?.fullName}</Typography>
        </Stack>
      ),
    },
    {
      key: "academy",
      name: "Academy",
      renderHeaderCell: () => (
        <Stack className={styles.commonCellStyle}>
          <Typography textAlign="center">Academy</Typography>
        </Stack>
      ),
      renderCell: ({ row }: any) => (
        <Stack className={styles.commonCellStyle}>
          <Typography textAlign="center">{row?.academy}</Typography>
        </Stack>
      ),
    },
    {
      key: "edit",
      name: "edit",
      renderHeaderCell: () => (
        <Stack className={styles.commonCellStyle}>
          <Typography textAlign="center">Edit Details</Typography>
        </Stack>
      ),
      renderCell: ({ row }: any) => (
        <Stack justifyContent="center" alignItems="center">
          <IconButton onClick={() => handleEdit(row?._id)}>
            <FaPencilAlt color="black" fontSize={18} />
          </IconButton>
        </Stack>
      ),
    },
    {
      key: "status",
      name: "Status",
      renderHeaderCell: () => (
        <Stack className={styles.commonCellStyle}>
          <Typography textAlign="center">Status</Typography>
        </Stack>
      ),
      renderCell: ({ row }: any) => (
        <Stack className={styles.commonCellStyle}>
          <StatusUpdate studentId={row._id} status={row?.active} />
        </Stack>
      ),
    },
    {
      key: "delete",
      name: "delete",
      renderHeaderCell: () => (
        <Stack className={styles.commonCellStyle}>
          <Typography textAlign="center">Delete details</Typography>
        </Stack>
      ),
      renderCell: ({ row }: any) => (
        <Stack className={styles.commonCellStyle}>
          <DeleteDetails studentId={row._id} />
        </Stack>
      ),
    },
  ];

  return (
    <>
      <Stack marginTop="2rem" p={4} justifyContent="center">
        <Stack maxHeight="65vh">
          <DataGrid
            enableVirtualization={false}
            className="rdg-light"
            headerRowHeight={60}
            columns={columns}
            rows={studentData}
            style={{
              overflowX: "auto",
              gridColumnStart: 1,
              gridColumnEnd: -1,
              height: "100%",
            }}
            rowHeight={50}
          />
        </Stack>
        {studentData.length === 0 ? (
          <Typography textAlign="center">No result found</Typography>
        ) : (
          <></>
        )}
        {isLoading && <CircularProgress sx={{ color: "#82b9d1" }} />}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="flex-end"
          mt="2rem"
        >
          <Button
            disabled={isLoading}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </Button>
          <Typography>Page {page}</Typography>
          <Button
            disabled={isLoading || studentData.length === 0}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </Stack>
      </Stack>

      {Boolean(searchAnchorEl) && (
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
              <TextField
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleRegistrationSearch();
                  }
                }}
                placeholder="Enter registration number"
                value={registrationNumber}
                onChange={(event) => setRegistrationNumber(event.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      type="button"
                      aria-label="search"
                      edge="end"
                      onClick={handleRegistrationSearch}
                    >
                      <CiSearch />
                    </IconButton>
                  ),
                }}
              />
            </Stack>
          </Stack>
        </Popover>
      )}
    </>
  );
};

export default StudentTable;

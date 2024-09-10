import React, { useEffect, useState } from "react";
import "react-data-grid/lib/styles.css";
import DataGrid, { renderHeaderCell } from "react-data-grid";
import {
  Button,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { fetchStudentsDetails } from "@/front-end-apis/student";
import { FaPencilAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import StatusUpdate from "./StatusUpdate";

const StudentTable = () => {
  const [studentData, setStudentData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleEdit = (studentId: string) => {
    router.push(`/studentRegistration?id=${studentId}`);
  };

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetchStudentsDetails(page, limit);
    setIsLoading(false);
    if (data) {
      setStudentData(data.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const columns = [
    {
      key: "registrationNumber",
      name: "Registration Number",
      renderHeaderCell: () => (
        <Typography textAlign="center">Registration Number</Typography>
      ),
      renderCell: ({ row }: any) => (
        <Typography textAlign="center">{row.registrationNumber}</Typography>
      ),
    },
    {
      key: "fullName",
      name: "Full Name",
      renderHeaderCell: () => (
        <Typography textAlign="center">Full Name</Typography>
      ),
      renderCell: ({ row }: any) => (
        <Typography textAlign="center">{row?.fullName}</Typography>
      ),
    },
    {
      key: "academy",
      name: "Academy",
      renderHeaderCell: () => (
        <Typography textAlign="center">Academy</Typography>
      ),
      renderCell: ({ row }: any) => (
        <Typography textAlign="center">{row?.academy}</Typography>
      ),
    },
    {
      key: "edit",
      name: "edit",
      renderHeaderCell: () => (
        <Typography textAlign="center">Edit Details</Typography>
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
        <Typography textAlign="center">Status</Typography>
      ),
      renderCell: ({ row }: any) => (
        <StatusUpdate studentId={row._id} status={row?.active} />
      ),
    },
  ];

  return (
    <Stack marginTop="2rem" p={4} justifyContent="center">
      {studentData.length > 0 && !isLoading && (
        <DataGrid
          className="rdg-light"
          columns={columns}
          rows={studentData}
          rowKeyGetter={(row) => row._id}
          style={{
            overflowX: "auto",
            gridColumnStart: 1,
            gridColumnEnd: -1,
            height: "100%",
          }}
        />
      )}
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
  );
};

export default StudentTable;

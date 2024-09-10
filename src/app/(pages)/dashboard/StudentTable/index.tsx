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
import styles from "./styles.module.css";

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
        <Stack className={styles.commonCellStyle}>
          <Typography textAlign="center">Registration Number</Typography>
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
  ];

  return (
    <Stack marginTop="2rem" p={4} justifyContent="center">
      {studentData.length > 0 && !isLoading && (
        <Stack maxHeight="60vh">
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

import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface IStatusUpdateProps {
  status: boolean;
  studentId: string;
}
const StatusUpdate = ({ status, studentId }: IStatusUpdateProps) => {
  const [changeStatus, setChangeStatus] = useState<boolean>(false);
  const [newStatus, setNewStatus] = useState<boolean>(status);
  const [currentStatus, setCurrentStatus] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewStatus(event.target.value === "Active");
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `/api/students/status/${studentId}`,
        {
          status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        toast.info("Status updated successfully", { autoClose: 1000 });
        setCurrentStatus(newStatus);
      }
      setChangeStatus(false);
    } catch (error: any) {
      console.error("Error updating status:", error);
      toast.error(error?.response?.data?.message || "Failed to update status", {
        autoClose: 2000,
      });
    } finally {
      setIsLoading(false);
      setChangeStatus(false);
    }
  };

  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);
  return (
    <Stack justifyContent="center" alignItems="center">
      <Button variant="text" onClick={() => setChangeStatus(true)}>
        {currentStatus ? "Active" : "In-active"}
      </Button>
      <Dialog open={changeStatus} onClose={() => setChangeStatus(false)}>
        <DialogTitle>Change Status</DialogTitle>
        <DialogContent>
          <RadioGroup
            value={newStatus ? "Active" : "Inactive"}
            onChange={handleStatusChange}
          >
            <FormControlLabel
              value="Active"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              value="Inactive"
              control={<Radio />}
              label="Inactive"
            />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setChangeStatus(false)}>Cancel</Button>
          <Button
            disabled={isLoading}
            endIcon={isLoading && <CircularProgress size={16} />}
            onClick={handleSave}
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default StatusUpdate;

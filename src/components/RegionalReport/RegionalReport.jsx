import { useEffect, useState } from "react";
import React from "react";
import { api } from "../../Api/requests";
import "./RegionalReport.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import DataArrayIcon from "@mui/icons-material/DataArray";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import TextField from "@mui/material/TextField";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const RegionalReport = () => {
  const [username, setUsername] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    getUsernames();
  }, []);

  const getUsernames = async () => {
    const res = await api.getRegionalUsers();
    setUsers(res.data);
  };
  const handleSubmit = async () => {
    setIsBtnLoading(true);
    const res = await api.getEntries({
      username,
      startDate: new Date(startDate),
      endDate,
    });
    setIsVisible(true);
    setEntries(
      res.map((item) => ({
        ...item,
        date: new Date(item.date).toLocaleString(),
      }))
    );

    setIsBtnLoading(false);
  };
  const validateForm = () => {
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    return sDate <= eDate && username !== "";
  };

  const columns = [
    { field: "id", headerName: "Id", width: 100 },
    { field: "docname", headerName: "Doctor's Name", width: 200 },
    { field: "docquali", headerName: "Doctor's Qualification", width: 150 },
    { field: "locname", headerName: "Location", width: 150 },
    { field: "chemists", headerName: "Chemists", width: 300 },
    { field: "sample", headerName: "Sample", width: 150 },
    { field: "partner", headerName: "Partner", width: 150 },
    { field: "miscellaneous", headerName: "Miscellaneous", width: 150 },
    { field: "fullgeolocation", headerName: "Geo Location", width: 500 },
    { field: "date", headerName: "Created On", width: 250 },
  ];
  return (
    <div>
      {/* className="regionalreport-formfield" */}
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="username-select-label">Username</InputLabel>
        <Select
          labelId="username-select-label"
          id="username"
          value={username}
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
        >
          {users.length > 0 &&
            users.map((user, key) => (
              <MenuItem value={user.username} key={key}>
                {user.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <LoadingButton
          style={{ lineHeight: "40px" }}
          loading={isBtnLoading}
          loadingPosition="start"
          startIcon={<DataArrayIcon />}
          variant="contained"
          onClick={handleSubmit}
          size="large"
          disabled={!validateForm()}
        >
          Submit
        </LoadingButton>
      </FormControl>
      {entries.length > 0 ? (
        <DataGrid
          rows={entries}
          columns={columns}
          style={{ height: 500 }}
          loading={isBtnLoading}
          components={{ Toolbar: GridToolbar }}
        />
      ) : (
        isVisible && (
          <Box sx={{ m: 4, width: "100%", maxWidth: 500 }}>
            <Typography variant="h3" component="h2">
              No Data Found
            </Typography>
          </Box>
        )
      )}
    </div>
  );
};

export default RegionalReport;

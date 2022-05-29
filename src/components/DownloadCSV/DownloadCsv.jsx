import { useState } from "react";
import { api } from "../../Api/requests";
import { downloadFile } from "../../utils/Utils";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import "./DownloadCsv.css";

const DownloadCsv = () => {
  const [date, setDate] = useState({ startDate: "", endDate: "" });
  const [isLoading, setIsLoading] = useState(false);
  const handleDateChange = (e) => {
    setDate((prevDate) => ({ ...prevDate, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await api.getExcel(date);

    if (res.status === 200) {
      downloadFile(res);
      console.log("success", res.data);
    } else console.log("error", res);
    setIsLoading(false);
  };
  const validateForm = () => {
    return date.startDate.length === 10 && date.endDate.length === 10;
  };
  return (
    <div>
      <div className="downloadCSV-date">
        <div>
          <label>Start date:</label>
          <input
            type="date"
            id="startDate"
            onChange={handleDateChange}
            value={date.startDate}
          />
        </div>

        <div>
          <label>End date:</label>
          <input
            type="date"
            id="endDate"
            onChange={handleDateChange}
            value={date.endDate}
          />
        </div>

        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          onClick={handleSubmit}
          size="large"
          disabled={!validateForm()}
        >
          Download
        </LoadingButton>
      </div>
    </div>
  );
};

export default DownloadCsv;

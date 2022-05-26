import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import "./Style.css";
import "../Loading/loading.css";
import "../Loading/loading-btn.css";
import { ToastContainer, toast } from "react-toastify";
import { api } from "../../Api/requests";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const initialState = {
  docname: "",
  locname: "",
  qualification: "",
  miscellaneous: "",
  sample: "",
  partner: "",
  chemists: "",
};
const TakeInput = () => {
  // form states
  const [form, setForm] = useState(initialState);
  const [location, setLocation] = useState({
    geolocation: "",
    fullgeolocation: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [locations, setLocations] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // props
  const { location: currentLocation } = useOutletContext();

  const validateForm = () => {
    return (
      form.docname.length > 1 &&
      form.locname.length > 1 &&
      form.qualification.length > 1 &&
      form.partner.length > 1
    );
  };

  useEffect(() => {
    fetchAutocomplete();
    setLocation({ ...currentLocation });
  }, []);

  const fetchAutocomplete = async () => {
    const doctorsRes = await api.getDoctors();
    const locationsRes = await api.getDocLocation();
    const qualificationsRes = await api.getQualification();

    if (doctorsRes.status === 200) {
      setDoctors(doctorsRes.data);
    } else console.log("error", doctorsRes);

    if (locationsRes.status === 200) {
      setLocations(locationsRes.data);
    } else console.log("error", locationsRes);

    if (qualificationsRes.status === 200) {
      setQualifications(qualificationsRes.data);
    } else console.log("error", qualificationsRes);
  };

  const resetStates = () => {
    setForm(initialState);
  };

  const notify = (msg, type) => {
    if (type === "SUCCESS") {
      toast.info(msg, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else if (type === "ERROR") {
      toast.error(msg, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const handleSubmit = async () => {
    const formData = { ...form, ...location };
    console.log(formData);
    setIsLoading(true);
    const res = await api.publishReport(formData);
    console.log(res);
    if (res.status === 200) {
      notify(res.data.message, "SUCCESS");
    } else {
      notify(res.data.error, "ERROR");
    }
    setIsLoading(false);
    resetStates();
  };
  return (
    <div>
      <div id="upload-report-form">
        <Autocomplete
          disablePortal
          options={doctors}
          onChange={(e, value) =>
            setForm((prevState) => ({
              ...prevState,
              docname: value ? value.label : "",
            }))
          }
          value={form.docname}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Doctor's Name*"
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  docname: e.target.value,
                }))
              }
            />
          )}
        />
        <Autocomplete
          disablePortal
          options={locations}
          value={form.locname}
          onChange={(e, value) =>
            setForm((prevState) => ({
              ...prevState,
              locname: value ? value.label : "",
            }))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Place*"
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  locname: e.target.value,
                }))
              }
            />
          )}
        />
        <Autocomplete
          disablePortal
          options={qualifications}
          value={form.qualification}
          onChange={(e, value) =>
            setForm((prevState) => ({
              ...prevState,
              qualification: value ? value.label : "",
            }))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Qualification*"
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  qualification: e.target.value,
                }))
              }
            />
          )}
        />
        <TextField
          label="Chemists"
          placeholder="chemist1, chemists2, chemist3"
          variant="outlined"
          value={form.chemists}
          onChange={(e) =>
            setForm((prevState) => ({ ...prevState, chemists: e.target.value }))
          }
        />
        <TextField
          label="Worked With*"
          placeholder="Ramesh, Pankaj..."
          variant="outlined"
          value={form.partner}
          onChange={(e) =>
            setForm((prevState) => ({ ...prevState, partner: e.target.value }))
          }
        />
        <TextField
          label="Sample"
          variant="outlined"
          placeholder="Eugevita, Eunacgen"
          value={form.sample}
          onChange={(e) =>
            setForm((prevState) => ({ ...prevState, sample: e.target.value }))
          }
        />

        <TextField
          label="Miscellaneous"
          variant="outlined"
          placeholder="Any extra information you want to provide"
          value={form.miscellaneous}
          onChange={(e) =>
            setForm((prevState) => ({
              ...prevState,
              miscellaneous: e.target.value,
            }))
          }
        />

        <ToastContainer />
      </div>
      <button
        type="button"
        className="btn btn-success ld-ext-right running"
        onClick={handleSubmit}
        disabled={!validateForm()}
      >
        <i className="fas fa-notes-medical pad-takeinput fa-lg" />
        {isLoading ? <div className="ld ld-ring ld-spin" /> : null}

        <span>Submit</span>
      </button>
    </div>
  );
};

export default TakeInput;

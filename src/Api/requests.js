import axios from "axios";
import { LOCAL_AUTH_KEY } from "../utils/constants";
const api = {};

const getAuthTokenFromLocal = () => {
  if (localStorage.getItem(LOCAL_AUTH_KEY)) {
    const authToken = JSON.parse(localStorage.getItem(LOCAL_AUTH_KEY));
    return authToken;
  }
};

const eugenics = axios.create({
  baseURL: "https://eugenics-backend-nileshkk9.vercel.app",
  timeout: 60000,
  headers: { Authorization: getAuthTokenFromLocal() },
});

api.registerUser = async (data) => {
  try {
    const res = await eugenics.post("/user/register", data);
    return await res;
  } catch (error) {
    return error;
  }
};

api.loginUser = async (data) => {
  try {
    const res = await eugenics.post("/user/login", data);
    return await res;
  } catch (error) {
    return error.response;
  }
};

api.sendRecoveryMail = async (data) => {
  try {
    const res = await eugenics.post("/user/password-reset", data);
    return await res;
  } catch (error) {
    return error.response;
  }
};

api.setNewPassword = async (email, token, data) => {
  try {
    const res = await eugenics.post(
      `/user/password-reset/${email}/${token}`,
      data
    );
    return await res;
  } catch (error) {
    return error;
  }
};

api.publishReport = async (data) => {
  try {
    const res = await eugenics.post("/report", data);
    return await res;
  } catch (error) {
    return error.response;
  }
};

api.getReports = async (pageNumber) => {
  try {
    const res = await eugenics.get(`/reports/${pageNumber}`);
    return await res;
  } catch (error) {
    return error.response;
  }
};

api.getExcel = async (data) => {
  try {
    const res = await eugenics.post("/reports/create-excel", data, {
      responseType: "arraybuffer",
    });
    return await res;
  } catch (error) {
    return error.response;
  }
};

api.getDoctors = async () => {
  try {
    const res = await eugenics.post(`/reports/doctors`);
    return await res;
  } catch (error) {
    return error.response;
  }
};

api.getQualification = async () => {
  try {
    const res = await eugenics.post(`/reports/qualifications`);
    return await res;
  } catch (error) {
    return error.response;
  }
};

api.getDocLocation = async () => {
  try {
    const res = await eugenics.post(`/reports/locations`);
    return await res;
  } catch (error) {
    return error.response;
  }
};

api.getUser = async () => {
  try {
    const res = await eugenics.get(`/user/me`);
    return await res;
  } catch (error) {
    return error.response;
  }
};

api.getGeoLocation = async (latitude, longitude) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
  try {
    const res = await axios.get(url);
    return await res;
  } catch (error) {
    return error;
  }
};

export { api };
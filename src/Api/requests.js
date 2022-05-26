import axios from "axios";

const api = {};

const getAuthTokenFromLocal = () => {
  if (localStorage.getItem("LoginData")) {
    const authToken = JSON.parse(localStorage.getItem("LoginData"));
    return authToken;
  }
};

const eugenics = axios.create({
  baseURL: "http://localhost:2222/",
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
    return error;
  }
};

api.getExcel = async (data) => {
  try {
    const res = await eugenics.post("/reports/create-excel", data);
    return await res;
  } catch (error) {
    return error;
  }
};

api.getDoctors = async (prefix) => {
  try {
    const res = await eugenics.post(`/doctors`);
    return await res;
  } catch (error) {
    return error.response;
  }
};

api.getQualification = async () => {
  try {
    const res = await eugenics.post(`/qualifications`);
    return await res;
  } catch (error) {
    return error.response;
  }
};

api.getDocLocation = async (prefix) => {
  try {
    const res = await eugenics.post(`/locations`);
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

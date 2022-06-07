import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import TakeInput from "./components/Main/TakeInput";
import ViewReport from "./components/ViewReport/ViewReport";
import DownloadCsv from "./components/DownloadCSV/DownloadCsv";



const routing = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route element={<PrivateRoute />}>
        <Route path="main" element={<Main />}>
          <Route path="upload" element={<TakeInput />} />
          <Route path="reports" element={<ViewReport />} />
          <Route path="download" element={<DownloadCsv />} />
        </Route>
      </Route>

      <Route path="/:email/:token" element={<ChangePassword />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route component={NotFound} />
    </Routes>
  </BrowserRouter>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(routing);

serviceWorker.register();

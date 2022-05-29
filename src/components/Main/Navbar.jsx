import { isMobile } from "react-device-detect";
import {
  SIDEBAR,
  LOCAL_AUTH_KEY
} from "../../utils/constants";
import React from "react";
import { useNavigate, useLocation } from "react-router";

const Navbar = ({ toggleSideNav, nav }) => {
  const navigate = useNavigate();
  const path = useLocation().pathname.split("/").pop();
  const logout = () => {
    localStorage.removeItem(LOCAL_AUTH_KEY);
    navigate("/");
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <button
        type="button"
        onClick={toggleSideNav}
        className="btn btn-info btn-xs"
      >
        <i className="fas fa-align-left fa-lg" />
      </button>
      {isMobile && nav === SIDEBAR ? null : (
        <React.Fragment>
          {path === "upload" ? <h5>Upload Entries</h5> : null}
          {path === "reports" ? <h5>Reports</h5> : null}
          {path === "download" ? <h5>Download Report</h5> : null}
          <button type="button" className="btn btn-danger" onClick={logout}>
            Logout
            <i className="fas fa-sign-out-alt fa-lg logoutbtn" />
          </button>
        </React.Fragment>
      )}
    </nav>
  );
};

export default Navbar;

import { isMobile } from "react-device-detect";
import React from "react";
import { useNavigate } from "react-router";

const Navbar = ({ toggleSideNav }) => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("LoginData");
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
        {/* {this.state.nav === "sidebar" && isMobile ? null : this.state
          .askingList ? (
        <Dropmenu sort={this.sortDropmenu} />
      ) : null} */}
        <React.Fragment>
          {/* {this.state.askingInput ? <h5>Upload Entries</h5> : null}
          {this.state.askingDownload ? <h5>Download Xls</h5> : null} */}
          <h5>Upload Entries</h5>
          <button type="button" className="btn btn-danger" onClick={logout}>
            Logout
            <i className="fas fa-sign-out-alt fa-lg logoutbtn" />
          </button>
        </React.Fragment>
      </nav>

  );
};

export default Navbar;

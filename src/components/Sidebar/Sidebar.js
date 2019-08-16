import React, { Component } from "react";
import "./Style.css";
import TakeInput from "./TakeInput";
import { Link } from "react-router-dom";
import Listitem from "../Listitem/Listitem";
import Pagination from "react-js-pagination";
import Axios from "axios";
import Spinner from "../SpinnerV3/Spinner";
class Sidebar extends Component {
  state = {
    nav: "sidebar",
    loc: "",
    fullAddress: "",
    sidebarPadding: "260px",
    activePage: 1,
    isLoading: false
  };

  //Get location from gps and geo reverse encoding
  getLocation = () => {
    var location = {
      longitude: "",
      latitude: ""
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        location = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        };
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${
          location.latitude
        }&lon=${location.longitude}`;
        // console.log(url);

        fetch(url)
          .then(res => res.json())
          .then(data => {
            this.setState({
              fullAddress: data.display_name,
              loc: data.display_name.split(",", 1)[0]
            });
            // console.log(this.state.fullAddress);
          });
      });
    } else {
      console.log("Geo Location not supported by browser");
    }
  };
  logout = () => {
    localStorage.removeItem("LoginData");
    window.location.href = "/";
  };
  handlePageChange = pageNumber => {
    // console.log(pageNumber);
    this.fetchEntries(pageNumber);
    this.setState({ activePage: pageNumber });
  };
  handleClick = () => {
    this.setState({
      nav: this.state.nav === "sidebar" ? "sidebar sidebar-active" : "sidebar",
      sidebarPadding: this.state.sidebarPadding === "260px" ? "20px" : "260px"
    });
  };

  componentDidMount() {
    this.getLocation();

    if (localStorage.getItem("LoginData")) {
      const state = JSON.parse(localStorage.getItem("LoginData"));
      // console.log(state);
      this.setState({ ...state }, () => {
        this.fetchEntries(1);
      });
    }
  }
  // Fetch list of entries
  fetchEntries = pagenumber => {
    this.setState({ isLoading: true });
    const url = `/react_eugenics_reporting/json.php?username=${
      this.state.username
    }&pagenumber=${pagenumber}`;
    console.log(url);
    Axios.get(url).then(res => {
      this.setState({ ...this.state, json: res.data, isLoading: false });
      console.log(this.state);
    });
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <nav className={this.state.nav}>
            <div className="sidebar-header">
              <img src="/logo.png" alt="company logo" />
              <h3>Eugenics</h3>
            </div>
            <ul className="list-unstyled ">
              <p>
                <i
                  className="fas fa-user fa-lg"
                  style={{ paddingRight: "0.2em" }}
                />
                {this.state.username}
              </p>
              <li className={!this.props.entries ? "active" : null}>
                <Link to="/">Home</Link>
              </li>
              <li className={this.props.entries ? "active" : null}>
                <Link to="/entries">Entries</Link>
              </li>
              <li>
                <Link to="/download">Download </Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <ul className="list-unstyled CTAs">
              <li>
                <Link to="" className="download">
                  <i
                    className="fas fa-map-marker-alt fa-lg"
                    style={{ paddingRight: "0.2em" }}
                  />
                  {this.state.loc}
                </Link>
              </li>

              <li>
                <Link to="/website" className="article">
                  Back to website
                </Link>
              </li>
            </ul>
          </nav>
          <div id="content" style={{ paddingLeft: this.state.sidebarPadding }}>
            <nav className="navbar navbar-light bg-light">
              <button
                type="button"
                onClick={this.handleClick}
                className="btn btn-info btn-xs"
              >
                <i className="fas fa-align-left" />
                {/* <span>Toggle Sidebar</span> */}
              </button>

              <button
                type="button"
                className="btn btn-danger"
                onClick={this.logout}
              >
                Logout
                <i
                  className="fas fa-sign-out-alt pad-takeinput"
                  style={{ paddingLeft: "0.2em" }}
                />
                {/* <span>Logout</span> */}
              </button>
            </nav>
            {this.props.isInput ? <TakeInput send={this.state} /> : null}
            {/* sidebar with entires route */}
            {/* -------------entries route is called--------------------------- */}

            {this.props.entries ? (
              this.state.isLoading ? (
                <Spinner />
              ) : (
                <div className="w3-container">
                  <ul className="w3-ul w3-card-4">
                    {this.state.json
                      ? this.state.json.map((data, i) => (
                          <Listitem data={data} key={i} />
                        ))
                      : null}
                  </ul>
                </div>
              )
            ) : null}
            {/* -----------------------render pagination---------------- */}
            {this.props.entries ? (
              this.state.isLoading ? null : (
                <div className="pagination-listview">
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    itemClass="page-item"
                    linkClass="page-link"
                    onChange={this.handlePageChange}
                  />
                </div>
              )
            ) : null}
            {/* ----------------pagination ended--------------- */}
          </div>
        </div>
      </div>
    );
  }
}
// let sidebarPadding = "260px";
export default Sidebar;

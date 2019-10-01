import React, { PureComponent } from "react";
import "./Style.css";
import TakeInput from "./TakeInput";
import { Link } from "react-router-dom";
import Listitem from "../Listitem/Listitem";
import Pagination from "react-js-pagination";
import Axios from "axios";
import Spinner from "../SpinnerV3/Spinner";
import Dropmenu from "../Dropmenu/Dropmenu";
import { isMobile } from "react-device-detect";
import DownloadCSV from "../DownloadCSV/DowloadCSV";
class Sidebar extends PureComponent {
  state = {
    nav: "sidebar",
    loc: "",
    fullAddress: "",
    sidebarPadding: "260px",
    activePage: 1,
    isLoading: false,
    askingInput: true,
    askingList: false,
    askingDownload: false
  };
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.json === nextState.json) return false;
  //   return true;
  // }
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
        console.log(location);
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.latitude}&lon=${location.longitude}`;
        // console.log(url);

        fetch(url)
          .then(res => res.json())
          .then(data => {
            this.setState({
              fullAddress: data.display_name,
              loc: data.display_name.split(",", 1)[0]
            });
            // console.log(this.state.fullAddress);
          })
          .catch(error => {
            console.log("Unable to fetch location: ", error);
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
    this.fetchEntries(pageNumber, dropmenu_value);
    this.setState({ activePage: pageNumber });
  };

  handleClick = () => {
    this.setState({
      nav: this.state.nav === "sidebar" ? "sidebar sidebar-active" : "sidebar",
      sidebarPadding: this.state.sidebarPadding === "260px" ? "20px" : "260px"
    });
  };

  handleTab = e => {
    if (isMobile) this.handleClick();
    const val = e.target.id;
    if (val === "home")
      this.setState({
        askingInput: true,
        askingList: false,
        askingDownload: false
      });
    else if (val === "entries")
      this.setState({
        askingInput: false,
        askingList: true,
        askingDownload: false
      });
    else if (val === "download")
      this.setState({
        askingInput: false,
        askingList: false,
        askingDownload: true
      });
    console.log(val);
  };

  componentDidMount() {
    this.getLocation();

    if (localStorage.getItem("LoginData")) {
      const state = JSON.parse(localStorage.getItem("LoginData"));
      // console.log(state);
      this.setState({ ...state }, () => {
        this.fetchEntries(this.state.activePage);
      });
    }
  }
  // Fetch list of entries
  fetchEntries = (pagenumber, sortOption = "date") => {
    //start loading spinner
    this.setState({ isLoading: true });

    //to request data
    //if sortOption is date sort by date else sort by the given options in php server side

    const URL = `https://www.eugenicspharma.in/react_eugenics_reporting/json.php?username=${this.state.username}&pagenumber=${pagenumber}&sortby=${sortOption}`;

    console.log(URL);
    this.axiosRequest(URL);
  };

  axiosRequest = url => {
    Axios.get(url)
      .then(res => {
        this.setState({ ...this.state, json: res.data, isLoading: false });
        console.log(this.state.json);
      })
      .catch(error => {
        console.log("Unable to fetch: ", error);
      });
  };

  //dropmenu functions called from dropmenu component
  sortDropmenu = e => {
    const option = e.target.value;
    dropmenu_value = option;
    console.log(option);
    this.fetchEntries(this.state.activePage, option);
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
            <ul className="list-unstyled">
              <p>
                <i
                  className="fas fa-user fa-lg"
                  style={{ paddingRight: "0.2em" }}
                />
                {this.state.name}
              </p>
              <li className={this.state.askingInput ? "active" : null}>
                <p onClick={this.handleTab} id="home">
                  Upload Data
                </p>
              </li>
              <li className={this.state.askingList ? "active" : null}>
                <p onClick={this.handleTab} id="entries">
                  Entries
                </p>
              </li>
              <li className={this.state.askingDownload ? "active" : null}>
                <p onClick={this.handleTab} id="download">
                  Download Xls
                </p>
              </li>
              {/* <li className={null}>
                <p onClick={this.handleTab} id="contact">
                  Contact
                </p>
              </li> */}
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
                <a href="https://www.eugenicspharma.in" className="article">
                  Back to website
                </a>
              </li>
            </ul>
          </nav>
          <div id="content" style={{ paddingLeft: this.state.sidebarPadding }}>
            {/* ----------------------------------------NAVBAR------------------------------------------- */}
            <nav className="navbar navbar-light bg-light">
              <button
                type="button"
                onClick={this.handleClick}
                className="btn btn-info btn-xs"
              >
                <i className="fas fa-align-left fa-lg" />
                {/* <span>Toggle Sidebar</span> */}
              </button>
              {/* Dropdown menu */}
              {this.state.nav === "sidebar" && isMobile ? null : this.state
                  .askingList ? (
                <Dropmenu sort={this.sortDropmenu} />
              ) : null}

              {this.state.nav === "sidebar" && isMobile ? null : (
                <React.Fragment>
                  {this.state.askingInput ? <h5>Upload Entries</h5> : null}
                  {this.state.askingDownload ? <h5>Download Xls</h5> : null}

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.logout}
                  >
                    Logout
                    <i className="fas fa-sign-out-alt fa-lg logoutbtn" />
                    {/* <span>Logout</span> */}
                  </button>
                </React.Fragment>
              )}
            </nav>
            {/* -----------------------------------NAVBAR END------------------------------------------ */}
            {/* ---------------------------------------- INPUT---------------------------------------------- */}
            {this.state.nav === "sidebar" && isMobile ? null : this.state
                .askingInput ? (
              <TakeInput send={this.state} />
            ) : null}
            {/* ---------------------------------------- INPUT END---------------------------------------------- */}

            {/* ---------------------------------------- ENTRIES ---------------------------------------------- */}
            {/* if sidebar is active and it is mobile user don't render list */}
            {this.state.nav === "sidebar" && isMobile ? null : this.state
                .askingList ? (
              this.state.isLoading ? (
                <Spinner />
              ) : (
                <React.Fragment>
                  <div className="w3-container">
                    <ul className="w3-ul w3-card-4">
                      {this.state.json
                        ? this.state.json.map((data, i) => (
                            <Listitem data={data} key={i} />
                          ))
                        : null}
                    </ul>
                  </div>
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
                </React.Fragment>
              )
            ) : null}
            {/* ---------------------------------------- ENTRIES END-------------------------------------------- */}

            {this.state.nav === "sidebar" && isMobile ? null : this.state
                .askingDownload ? (
              <DownloadCSV username={this.state.username} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
// let sidebarPadding = "260px";
export default Sidebar;
let dropmenu_value = "date";

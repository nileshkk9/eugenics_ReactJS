import React, { Component } from "react";
// import Axios from "axios";
import "./Download.CSV.css";
class DownloadCSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDate: "",
      secondDate: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    // [e.target.id]:
  };
  validateForm = () => {
    return (
      this.state.firstDate.length === 10 && this.state.secondDate.length === 10
    );
  };

  handleClick = e => {
    //parsing date
    console.log(this.state);
    const { firstDate, secondDate } = this.state;
    const URL = `https://eugenicspharma.in/react_eugenics_reporting/jsonDate.php?username=${
      this.props.username
    }&firstDate=${firstDate}&secondDate=${secondDate}`;
    this.setState({ ...this.state, URL });

    console.log(URL);
  };
  render() {
    return (
      <div>
        <div className="downloadCSV-date">
          <div>
            <label>Start date:</label>
            <input
              type="date"
              id="firstDate"
              onChange={this.handleChange}
              value={this.state.firstDate}
            />
          </div>

          <div>
            <label>End date:</label>
            <input
              type="date"
              id="secondDate"
              onChange={this.handleChange}
              value={this.state.secondDate}
            />
          </div>

          {/* <div className="download-btn"> */}
          <a href={this.state.URL} target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              onClick={this.handleClick}
              className="btn btn-info btn-xs"
              disabled={!this.validateForm()}
            >
              Download
              <i className="far fa-file-excel fa-lg" />
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default DownloadCSV;

import React, { Component } from "react";
import "./ForgotPassword.css";
import Axios from "axios";
import Spinner from "../Spinner/Spinner";

class ForgotPassword extends Component {
  state = {
    email: "",
    isSuccess: -1,
    isloading: false
  };
  axiosRequest = url => {
    this.setState({ isloading: true });
    const email = this.state.email;
    Axios.post(url, { email })
      .then(res => {
        this.setState({ isloading: false, isSuccess: res.data.status });
        console.log(res.data);
      })
      .catch(e => {
        this.setState({ isloading: false });
        console.log(e);
      });
  };
  handleclick = e => {
    const URL =
      "https://www.eugenicspharma.in/react_eugenics_reporting/tokenmailer.php";
    e.preventDefault();
    this.axiosRequest(URL);
  };
  handlechange = e => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="body-login">
          <div className="container-login">
            <div className="header-login">
              {/* <img className="lock" src={logo} alt="lock" /> */}
              <i className="fas fa-lock fa-lg"></i>
              <br />
              FORGOT PASSWORD?
              <p>You can reset your password here.</p>
            </div>
            <div className="tbox-login">
              <i className="fas fa-user" />
              <input
                id="email"
                type="text"
                onChange={this.handlechange}
                placeholder="Enter your email address"
                style={inputArea}
              />
            </div>
            <button
              className="btn-login"
              type="submit"
              onClick={this.handleclick}
            >
              Send
            </button>

            <div style={correctemail}>
              <b>
                {this.state.isSuccess === 1 ? "Please Check Your Mail!" : null}
              </b>
            </div>
            <div style={wrongemail}>
              <b>{this.state.isSuccess === 0 ? "Invalid Email!" : null}</b>
            </div>
            <a href="google.com" className="l2-login" to="/">
              CREATE NEW ACCOUNT
            </a>
            {this.state.isloading ? <Spinner /> : null}
          </div>
        </div>
      </div>
    );
  }
}

const inputArea = {
  background: "none",
  border: "none",
  outline: "none",
  textAlign: "center",
  margin: "auto",
  fontFamily: "Poppins",
  width: "90%",
  lineHeight: "37px",
  fontSize: "14px",
  color: "#333"
};
const correctemail = {
  display: "block",
  width: "260px",
  padding: "5px 0",
  color: "green",
  textAlign: "center",
  margin: "0px auto",
  transition: "0.5s all"
};
const wrongemail = { ...correctemail, color: "red" };
// console.log(wrongemail);
export default ForgotPassword;

import React, { Component } from "react";
import "./Login.css";
// import Main from "../Main/Main";
import axios from "axios";
import { Link } from "react-router-dom";
import auth from "../auth";
import Spinner from "../Spinner/Spinner";

class Login extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    place: "",
    isSuccess: "",
    isloading: false
  };
  componentDidMount() {
    if (localStorage.getItem("LoginData")) {
      const state = JSON.parse(localStorage.getItem("LoginData"));
      this.setState({ ...state });
    }
  }
  componentDidUpdate() {
    if (this.state.isSuccess) {
      auth.login(() => {
        localStorage.setItem("LoginData", JSON.stringify(this.state));
        this.props.history.push("/main");
      });
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  validateForm = () => {
    return this.state.username.length > 4 && this.state.password.length > 4;
  };
  handleClick = e => {
    this.setState({ isloading: true });
    const url =
      "https://www.eugenicspharma.in/react_eugenics_reporting/login.php";
    const login = {
      username: this.state.username,
      password: this.state.password
    };
    // console.log(login.username, login.password);
    axios
      .post(url, {
        login
      })
      .then(res => {
        // console.log(res.data);
        this.setState({
          isSuccess: res.data.success,
          isloading: false,
          name: res.data.name,
          place: res.data.place
        });
        if (this.state.isSuccess === 0) {
          wrongLogin.display = "block";
        } else {
          wrongLogin.display = "none";
        }
      })
      .catch(error => {
        this.setState({ isloading: false });
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div className="body-login">
          <div className="container-login">
            <div className="header-login">
              <i className="fas fa-user-lock fa-lg"></i>
              <br />
              LOG IN
            </div>

            <div className="tbox-login">
              <i className="fas fa-user" />
              <input
                id="username"
                type="text"
                placeholder="username"
                style={inputArea}
                onChange={this.handleChange}
                value={this.state.username}
              />
            </div>
            <div className="tbox-login">
              <i className="fas fa-lock" />
              <input
                id="password"
                type="password"
                placeholder="password"
                style={inputArea}
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
            <button
              className="btn-login"
              type="submit"
              onClick={this.handleClick}
              disabled={!this.validateForm()}
            >
              Login
            </button>

            <div
              className={
                this.state.isSuccess === 0
                  ? "wrong-login-visible"
                  : "wrong-login-hidden"
              }
            >
              Invalid username or password
            </div>
            <Link className="l1-login" to="/forgot-password">
              FORGOT PASSWORD
            </Link>

            {/* <Link className="l2-login" to="/create-account">
              CREATE AN ACCOUNT
            </Link> */}
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
const wrongLogin = {
  display: "block",
  width: "260px",
  padding: "5px 0",
  color: "red",
  textAlign: "center",
  margin: "0px auto",
  transition: "0.5s all"
};
export default Login;

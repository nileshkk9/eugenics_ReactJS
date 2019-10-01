import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

class ChangePassword extends Component {
  state = {
    password: "",
    re_password: "",
    email: "",
    token: "",
    isSuccess: "",
    isloading: false,
    redirect: false
  };
  componentDidMount() {
    const { token, email } = this.props.match.params;
    this.setState({ email, token });

    console.log(token, email);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    // console.log(this.state);
  };

  handleClick = e => {
    this.verifyToken();
  };

  verifyToken = () => {
    const URL =
      "https://www.eugenicspharma.in/react_eugenics_reporting/verifyToken.php";
    this.request(URL);
  };

  request = URL => {
    this.setState({ isloading: true });
    const { token, email, password } = this.state;
    axios
      .post(URL, { token, email, password })
      .then(res => {
        this.setState({
          isloading: false,
          isSuccess: res.data.status,
          redirect: true
        });
        console.log(res.data);
      })
      .catch(e => {
        this.setState({ isloading: false });
        console.log(e);
      });
  };

  renderRedirect = () => {
    setTimeout(() => {
      if (this.state.redirect) {
        console.log("redirecting");
        this.props.history.push("/");
      }
    }, 5000);
  };
  validateForm = () => {
    return (
      this.state.password.length > 5 &&
      this.state.re_password.length > 5 &&
      this.state.password === this.state.re_password
    );
  };

  validator = () => {
    const { password: pass, re_password: repass } = this.state;

    if (pass.length <= 5 && pass.length >= 3) return "Password Too short!";
    else if (pass.length > 5 && repass.length > 5 && pass !== repass)
      return "Password does not match!";
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <div className="body-login">
          <div className="container-login">
            <div className="header-login">
              <i className="fas fa-lock-open fa-lg"></i>
              <br />
              Reset Password!
            </div>
            <div className="tbox-login">
              <i className="fas fa-user" />
              <input
                id="email"
                type="text"
                style={inputArea}
                disabled
                value={this.state.email}
              />
            </div>

            <div className="tbox-login">
              <i className="fas fa-lock" />

              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                style={inputArea}
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
            <div className="tbox-login">
              <i className="fas fa-lock" />
              <input
                id="re_password"
                type="password"
                placeholder="Re-enter Password"
                style={inputArea}
                onChange={this.handleChange}
                value={this.state.re_password}
              />
            </div>
            <button
              className="btn-login"
              type="submit"
              onClick={this.handleClick}
              disabled={!this.validateForm()}
            >
              Submit
            </button>
            <div style={valid}>
              <b>
                {this.state.isSuccess === 1
                  ? "Password Changed Successfully! \n Redirecting....."
                  : null}
              </b>
            </div>
            <div style={notvalid}>
              <b>{this.state.isSuccess === 0 ? "Token Has Expired!" : null}</b>
              {this.validator()}
            </div>

            <Link className="l2-login" to="/">
              CREATE AN ACCOUNT
            </Link>
            {this.state.isloading ? (
              <Spinner style={{ margin: "50px" }} />
            ) : null}
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
const valid = {
  display: "block",
  width: "260px",
  padding: "5px 0",
  color: "green",
  textAlign: "center",
  margin: "0px auto",
  transition: "0.5s all"
};
const notvalid = { ...valid, color: "red" };

export default ChangePassword;

import { api } from "../../Api/requests";
import { Link, useNavigate } from "react-router-dom";
import auth from "../auth";
import Spinner from "../Spinner/Spinner";
import "./Login.css";
import { useEffect, useState } from "react";
import { LOCAL_AUTH_KEY } from "../../utils/constants";

const Login = () => {
  const [inputField, setInputField] = useState({
    username: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(LOCAL_AUTH_KEY)) {
      const authToken = JSON.parse(localStorage.getItem(LOCAL_AUTH_KEY));
      async function verifyUser() {
        const res = await api.getUser();
        if (res.status === 200) setToken(authToken);
        else navigate("/");
      }
      verifyUser();
    }
  }, []);

  useEffect(() => {
    if (token) {
      auth.login(() => {
        localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify(token));
        navigate("/main/upload");
      });
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    const { id, value } = e.target;

    setInputField({ ...inputField, [id]: value });
  };
  const validateForm = () =>
    inputField.username.length > 4 && inputField.password.length > 4;

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await api.loginUser(inputField);
    if (res.status === 200) setToken(res.data.token);
    else setErrMsg(res.data.error);
    setIsLoading(false);
  };
  return (
    <div>
      <div className="body-login">
        <form action="">
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
                onChange={handleChange}
                value={inputField.username}
              />
            </div>
            <div className="tbox-login">
              <i className="fas fa-lock" />
              <input
                id="password"
                type="password"
                placeholder="password"
                style={inputArea}
                onChange={handleChange}
                value={inputField.password}
              />
            </div>
            <button
              className="btn-login"
              type="submit"
              onClick={handleClick}
              disabled={!validateForm()}
            >
              Login
            </button>

            <div className="wrong-login">{errMsg}</div>
            <Link className="l1-login" to="/forgot-password">
              FORGOT PASSWORD
            </Link>

            <Link className="l2-login" to="/create-account">
              CREATE AN ACCOUNT
            </Link>
            {isLoading ? <Spinner /> : null}
          </div>
        </form>
      </div>
    </div>
  );
};

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
  color: "#333",
};

export default Login;

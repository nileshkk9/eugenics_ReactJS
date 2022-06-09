import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./ChangePassword.css"
import { api } from "../../Api/requests";

const ChangePassword = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rePassword: "",
    token: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const validateForm = () => {
    return (
      form.password.length > 5 &&
      form.rePassword.length > 5 &&
      form.password === form.rePassword
    );
  };

  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      token: params.token,
      email: params.email,
    }));
  }, []);

  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const validator = () => {
    const { password: pass, rePassword: repass } = form;

    if (pass.length <= 5 && pass.length >= 3) return "Password Too short!";
    else if (pass.length > 5 && repass.length > 5 && pass !== repass)
      return "Password does not match!";
  };
  const handleClick = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const res = await api.verifyPasswordResetToken({
      password: form.password,
      token: form.token,
      email: form.email,
    });
    if (res.status === 200) {
      setSuccessMsg(res.data.message)
    } else {
      setErrorMsg(res.data.error)
    }
    setIsLoading(false);
    setTimeout(()=>{
      navigate("/");
    },3000)

  };
  return (
    <div>
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
              disabled
              value={form.email}
            />
          </div>

          <div className="tbox-login">
            <i className="fas fa-lock" />

            <input
              id="password"
              type="password"
              placeholder="Enter Password"
             
              onChange={handleChange}
              value={form.password}
            />
          </div>
          <div className="tbox-login">
            <i className="fas fa-lock" />
            <input
              id="rePassword"
              type="password"
              placeholder="Re-enter Password"

              onChange={handleChange}
              value={form.rePassword}
            />
          </div>
          <button
            className="btn-login"
            type="submit"
            onClick={handleClick}
            disabled={!validateForm()}
          >
            Submit
          </button>
          <div className={`password-reset-${successMsg ? "valid" : "notvalid"}`}>
              {successMsg || errorMsg}
          </div>
          <div className="password-reset-notvalid">
            {validator()}
          </div>

          {/* <Link className="l2-login" to="/">
            CREATE AN ACCOUNT
          </Link> */}
          {isLoading ? <Spinner style={{ margin: "50px" }} /> : null}
        </div>
      </div>
    </div>
  );
};


export default ChangePassword;

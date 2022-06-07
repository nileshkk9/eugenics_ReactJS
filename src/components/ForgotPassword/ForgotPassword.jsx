import { useState } from "react";
import "./ForgotPassword.css";
import { api } from "../../Api/requests";
import Spinner from "../Spinner/Spinner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleClick = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await api.sendRecoveryMail({email});
    if (res.status === 200) setSuccessMsg(res.data.message);
    else setErrorMsg(res.data.error);
    setIsLoading(false);
  };

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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
          <button className="btn-login" type="submit" onClick={handleClick}>
            Send
          </button>

          <div style={successMsg ? correctemail : wrongemail}>
            <b>{successMsg || errorMsg}</b>
          </div>
          {/* <div style={wrongemail}>
            <b>{errorMsg}</b>
          </div> */}
          <a href="google.com" className="l2-login" to="/">
            CREATE NEW ACCOUNT
          </a>
          {isLoading ? <Spinner /> : null}
        </div>
      </div>
    </div>
  );
};

const correctemail = {
  display: "block",
  width: "260px",
  padding: "5px 0",
  color: "green",
  textAlign: "center",
  margin: "0px auto",
  transition: "0.5s all",
};
const wrongemail = { ...correctemail, color: "red" };
export default ForgotPassword;

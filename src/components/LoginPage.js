import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/login.css";
import { Row } from "reactstrap";
import InputFeild from "./Input/Input";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      onLogin();
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  const validUsername = "Dharun";
  const validPassword = "Dharun@123";

  return (
    <div className="login_screen_container">
      <Row>
        <div className="login_greeting_con">
          <div>Welcome back!</div>
          <div className="greet_info">please login to your account</div>
        </div>
        <div className="login_inputs_con">
          <form onSubmit={handleSubmit}>
            <div className="login_eye_con_fixed">
              <InputFeild
                label={"Username"}
                classNameInLabel="hr_login_password_field_label login_password"
                PiEyeSlash
                name="username"
                width={"100%"}
                keyname={"username"}
                value={username}
                onChange={(e, value) => setUsername(value)}
                placeholder={"Username"}
                onKeyPress={true}
              />
            </div>
            <div className="login_eye_con_fixed">
              <InputFeild
                label={"Password"}
                classNameInLabel="hr_login_password_field_label login_password"
                PiEyeSlash
                name="Password"
                width={"100%"}
                keyname={"password"}
                value={password}
                onChange={(e, value) => setPassword(value)}
                placeholder={"Password"}
                onKeyPress={true}
              />
            </div>
            <div>
              {error && <p style={{ color: "red", fontSize: "12" }}>{error}</p>}
            </div>
            <div className="login_button" onClick={handleSubmit}>
              Login
            </div>
          </form>
        </div>
      </Row>
    </div>
  );
}

export default LoginPage;

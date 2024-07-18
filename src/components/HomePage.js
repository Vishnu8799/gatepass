import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFeild from "./Input/Input";
import { Row } from "reactstrap";
import "../components/login.css";

function HomePage({ onLogout }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${name}\nDate: ${date}\nStart Time: ${startTime}\nEnd Time: ${endTime}`
    );
  };

  <button onClick={handleLogout}>Logout</button>;

  return (
    <div className="login_screen_container">
      <Row className="content">
        <div className="login_greeting_con">
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            Gate Pass
          </div>
        </div>
        <div className="login_inputs_con">
          <form onSubmit={handleSubmit}>
            <Row>
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Date:
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="login_eye_con_fixed">
                <label>
                  Start Time:
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="login_eye_con_fixed">
                <label>
                  End Time:
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                  />
                </label>
              </div>
            </Row>
            <Row style={{ width: "100%" }}>
              <div className="generatebutton" onClick={handleSubmit}>
                Generate
              </div>
            </Row>
          </form>
        </div>
      </Row>
    </div>
  );
}

export default HomePage;

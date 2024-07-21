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
        <div className="home_greeting_con">
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            Gate Pass
          </div>
          {/* <div>Logout</div> */}
        </div>
        <div className="Home_inputs_con">
          <form onSubmit={handleSubmit}>
            <Row style={{ padding: "20px" }}>
              <div style={{ padding: "10px" }}>
                <label>
                  Name :{" "}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div style={{ padding: "10px" }}>
                <label>
                  Date :{" "}
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div style={{ padding: "10px" }}>
                <label>
                  Start Time :{" "}
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="login_eye_con_fixed" style={{ padding: "10px" }}>
                <label>
                  End Time :{" "}
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                  />
                </label>
              </div>
            </Row>
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
              }}
              onClick={handleSubmit}
            >
              <div className="generatebutton">Generate</div>
            </div>
          </form>
        </div>
      </Row>
    </div>
  );
}

export default HomePage;

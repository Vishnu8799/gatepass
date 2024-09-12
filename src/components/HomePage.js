import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import "../components/login.css";

function HomePage({ onLogout }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  const validateForm = () => {
    let formErrors = {};

    if (!name) formErrors.name = "Name is required.";
    if (!date) formErrors.date = "Date is required.";
    if (!startTime) formErrors.startTime = "Start Time is required.";
    if (!endTime) formErrors.endTime = "End Time is required.";

    // Ensure end time is after start time
    if (startTime && endTime && startTime >= endTime) {
      formErrors.time = "End Time must be after Start Time.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert(
        `Name: ${name}\nDate: ${date}\nStart Time: ${startTime}\nEnd Time: ${endTime}`
      );
    }
  };

  return (
    <div className="login_screen_container">
      <Row className="content">
        <Row className="home_greeting_con">
          <Col lg={11}>
            Gate Pass
          </Col>
          <Col lg={1} style={{fontSize:'18px',cursor:'pointer'}} onClick={handleLogout}>
            Logout
          </Col>
        </Row>

        <div className="Home_inputs_con">
          <form onSubmit={handleSubmit}>
            <Row style={{ padding: "20px" }}>
              <div style={{ padding: "10px" }}>
                <label>
                  Name :
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>

              <div style={{ padding: "10px" }}>
                <label>
                  Date :
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </label>
                {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
              </div>

              <div style={{ padding: "10px" }}>
                <label>
                  Start Time : 
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                  />
                </label>
                {errors.startTime && (
                  <p style={{ color: "red" }}>{errors.startTime}</p>
                )}
              </div>

              <div style={{ padding: "10px" }}>
                <label>
                  End Time :
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                  />
                </label>
                {errors.endTime && (
                  <p style={{ color: "red" }}>{errors.endTime}</p>
                )}
                {errors.time && <p style={{ color: "red" }}>{errors.time}</p>}
              </div>
            </Row>

            <div
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <button type="submit" className="generatebutton">
                Generate
              </button>
            </div>
          </form>
        </div>
      </Row>
    </div>
  );
}

export default HomePage;

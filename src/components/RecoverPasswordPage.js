import "../stylesheet.css";
import { React } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";

const RecoverPasswordPage = () => {
  let nevigate = useNavigate();

  return (
    <div>
      <div className="background">
        <div className="container">
          <div className="navBar">
            <Button
              variant="success"
              className="btn-nav"
              onClick={() => {
                nevigate("/Saved");
              }}
            ></Button>{" "}
            <Button variant="warning" className="btn-nav"></Button>{" "}
            <Button variant="danger" className="btn-nav"></Button>{" "}
          </div>
          <div className="input-container">
            <input placeholder="email" className="input-group" />

            <button className=" button4">Confirm</button>
          </div>

          <ButtonGroup aria-label="Basic example" className="extension">
            <Button
              variant="secondary"
              onClick={() => {
                nevigate("/Sign-up");
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                nevigate("/react-login");
              }}
            >
              Login
            </Button>
            <Button variant="secondary">Recover Password</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default RecoverPasswordPage;

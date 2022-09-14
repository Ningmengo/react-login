import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";

const AccountSavedPage = () => {
  let nevigate = useNavigate();
  return (
    <div className="background">
      <div className="container">
        <div className="navBar">
          <Button variant="success" className="btn-nav"></Button>{" "}
          <Button variant="warning" className="btn-nav"></Button>{" "}
          <Button variant="danger" className="btn-nav"></Button>{" "}
        </div>
        <div className="whiteboard"></div>
        <ButtonGroup aria-label="Basic example" className="extension-2">
          <Button variant="secondary">Sign Up</Button>
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
  );
};

export default AccountSavedPage;

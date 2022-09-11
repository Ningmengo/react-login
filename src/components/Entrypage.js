import "../stylesheet.css";
import React from "react";
import Button from "react-bootstrap/Button";

const Entrypage = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="navBar">
          <Button variant="success" className="btn-nav"></Button>{" "}
          <Button variant="warning" className="btn-nav"></Button>{" "}
          <Button variant="danger" className="btn-nav"></Button>{" "}
        </div>
        <div className="input-container">
          <input placeholder="username" className="input-group" />
          <input placeholder="password" className="input-group" />
          <button className=" button4">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Entrypage;

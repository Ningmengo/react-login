import "../stylesheet.css";
import { useContext, useState, React } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const SignUpPage = () => {
  const { data, setData } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let nevigate = useNavigate();

  const handleClick = () => {
    const newData = {
      username: username,
      password: password,
      id: data.length + 1,
    };
    setData([...data, newData]);
  };
  return (
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
          <input
            placeholder="username"
            className="input-group"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            className="input-group"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className=" button4" onClick={handleClick}>
            Login
          </button>
        </div>

        <ButtonGroup aria-label="Basic example" className="extension">
          <Button variant="secondary">Sign Up</Button>
          <Button variant="secondary">Login</Button>
          <Button variant="secondary">Recover Password</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default SignUpPage;

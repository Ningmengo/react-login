import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import EntryPage from "./components/EntryPage";
import AccountSavedPage from "./components/AccountSavedPage";
import ErrorPage from "./components/ErrorPage";
import { UserContext } from "./components/UserContext";

function App() {
  const [data, setData] = useState([]);
  return (
    <Router>
      <UserContext.Provider value={{ data, setData }}>
        <Routes>
          <Route exact path="/react-login" element={<EntryPage />}></Route>
          <Route path="/Saved" element={<AccountSavedPage />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

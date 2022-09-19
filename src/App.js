import "bootstrap/dist/css/bootstrap.min.css";
import { React, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import EntryPage from "./components/EntryPage";
import AccountSavedPage from "./components/AccountSavedPage";
import ErrorPage from "./components/ErrorPage";
import { UserContext } from "./components/UserContext";
import SignUpPage from "./components/SignUpPage";

function App() {
  const [data, setData] = useState([]);
  const providerValue = { data, setData };
  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route exact path="/react-login" element={<EntryPage />}></Route>
          <Route path="/Saved" element={<AccountSavedPage />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
          <Route path="/Sign-up" element={<SignUpPage />}></Route>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

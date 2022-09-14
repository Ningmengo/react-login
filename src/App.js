import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import EntryPage from "./components/EntryPage";
import AccountSavedPage from "./components/AccountSavedPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/react-login" element={<EntryPage />}></Route>
        <Route path="/Saved" element={<AccountSavedPage />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

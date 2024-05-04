import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import WorkPage from "./pages/WorkPage";

const App = () => {

  useEffect(() => {
    document.title = "Leo Shi";
  }, []);

  return (
    <Router basename="/leo-io">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
    </Router>
  );
};

export default App;

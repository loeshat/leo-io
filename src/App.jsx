import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import WorkPage from "./pages/WorkPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/leo-io" element={<HomePage />} />
        <Route path="/leo-io/profile" element={<ProfilePage />} />
        <Route path="/leo-io/work" element={<WorkPage />} />
      </Routes>
    </Router>
  );
};

export default App;

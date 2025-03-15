import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Page404 from "./pages/404";
import "./output.css";
import History from "./pages/history";
import CommingSoon from "./pages/commingSoon";

function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/missionandvission" element={<CommingSoon />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRouting;

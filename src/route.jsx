import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Page404 from "./pages/404";
import "./output.css";
import History from "./pages/history";
import CommingSoon from "./pages/commingSoon";
import JoinUs from "./pages/joinus";

function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/missionandvission" element={<CommingSoon />} />
      <Route path="/beliefs" element={<CommingSoon />} />
      <Route path="/childrenMinistry" element={<CommingSoon />} />
      <Route path="/teenagerMinistry" element={<CommingSoon />} />
      <Route path="/blog" element={<CommingSoon />} />
      <Route path="/contact" element={<CommingSoon />} />
      <Route path="/donate" element={<CommingSoon />} />
      <Route path="/bibleStudyMaterial" element={<CommingSoon />} />
      <Route path="/leaders" element={<CommingSoon />} />
      <Route path="/joinus" element={<JoinUs />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRouting;

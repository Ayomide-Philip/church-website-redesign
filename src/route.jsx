import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Page404 from "./pages/404";
import "./output.css";
import History from "./pages/history";
import CommingSoon from "./pages/commingSoon";
import JoinUs from "./pages/joinus";
import ContactUs from "./pages/contactus";
import Leader from "./pages/leader";
import Missionandvission from "./pages/missionAndVission";
import Children from "./pages/children";
import Teenagers from "./pages/teenagers";

function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/missionandvission" element={<Missionandvission />} />
      <Route path="/childrenMinistry" element={<Children />} />
      <Route path="/teenagerMinistry" element={<Teenagers />} />
      <Route path="/blog" element={<CommingSoon />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/donate" element={<CommingSoon />} />
      <Route path="/bibleStudyMaterial" element={<CommingSoon />} />
      <Route path="/leaders" element={<Leader />} />
      <Route path="/joinus" element={<JoinUs />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRouting;

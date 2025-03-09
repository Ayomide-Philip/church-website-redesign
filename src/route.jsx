import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRouting;

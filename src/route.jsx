import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Page404 from "./pages/404";
import App from "./App";
import "./output.css";
function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<Page404 />}>
        <Route path="history" element={<Home />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRouting;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Client } from "../pages/page";
const RouterNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Client />} />
    </Routes>
  );
};

export default RouterNavigation;

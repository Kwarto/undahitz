import React from "react";
import { Routes, Route } from "react-router-dom";
import { Client } from "../pages/page";
import { Detail } from "../components/comp";
const RouterNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Client />} />
      <Route path="/blog" element={<encodeURI />} />
      <Route path="/client/post/:id" element={<Detail />} />
    </Routes>
  );
};

export default RouterNavigation;

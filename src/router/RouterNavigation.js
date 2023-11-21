import React from "react";
import { Routes, Route } from "react-router-dom";
import { Category, Client, Products } from "../pages/page";
import { Detail } from "../components/comp";
const RouterNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Client />} />
      <Route path="/blog" element={<encodeURI />} />
      <Route path="/client/post/:id" element={<Detail />} />
      <Route path="/client/genres" element={<Category />} />
      <Route path="/client/products" element={<Products />} />
    </Routes>
  );
};

export default RouterNavigation;

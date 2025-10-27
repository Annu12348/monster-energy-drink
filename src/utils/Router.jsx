import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Store from "../page/Store";
import Drinks from "../page/Drinks";
import Order from "../page/Order";
import Contact from "../page/Contact";
import Collab from "../page/Collab";
import SignUp from "../page/SignUp";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/drinks" element={<Drinks />} />
      <Route path="/orders" element={<Order />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collab" element={<Collab />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default Router;

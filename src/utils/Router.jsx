import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Store from "../page/Store";
import Drink from "../page/Drink";
import Order from "../page/Order";
import Contact from "../page/Contact";
import Collab from "../page/Collab";
import SignUp from "../page/SignUp";
import CardDetails from "../page/CardDetails";
import Cart from "../page/Cart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/drinks" element={<Drink />} />
      <Route path="/drinks/cart" element={<Cart />} />
      <Route path="/drinks/details/:id" element={<CardDetails />} />
      <Route path="/orders" element={<Order />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collab" element={<Collab />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default Router;

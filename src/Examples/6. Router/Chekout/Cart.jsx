import React from "react";
import { Routes, Route } from "react-router";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div>
      Cart <Link to={"checkout"}> Checkout</Link>
      <Routes>
        <Route path="checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
};

export default Cart;

import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login/Login";
import LandPage from "./pages/LandPage/LandPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Customer from "./pages/Customer/Customer";
import Address from "./pages/Address/Address";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

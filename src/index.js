import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./Router/AppRoutes";
import { CartProvider } from "./Components/Context/CardContext/CartContext";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("mx_Hit"));

root.render(
  <React.StrictMode>
    <CartProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={AppRoutes} />
    </CartProvider>
  </React.StrictMode>
);

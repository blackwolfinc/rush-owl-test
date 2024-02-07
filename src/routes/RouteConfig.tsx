import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";

//=================================================================
// Route Configuration Component
//=================================================================

export const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for Login page */}
        <Route path="" element={<Login />} />

        {/* Route for 404 Page */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

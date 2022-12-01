import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeAdminScreen } from "../pages/dashboard/home/homeAdminScreen";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route index={true} element={<HomeAdminScreen />} />
    </Routes>
  );
};

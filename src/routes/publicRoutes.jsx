import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore/useAuthStore";

export const PublicRoutes = ({ children }) => {
  const { status } = useAuthStore();

  return status === "not-authenticated" ? (
    children
  ) : (
    <Navigate to="/dashboard/" />
  );
};

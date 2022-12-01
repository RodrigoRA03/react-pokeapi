import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore/useAuthStore";

export const PrivateRoutes = ({ children }) => {
  const { status } = useAuthStore();

  return status === "authenticated" ? (
    children
  ) : (
    <Navigate to={"/auth/login"} />
  );
};

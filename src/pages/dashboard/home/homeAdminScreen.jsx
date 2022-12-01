import React from "react";
import { Button } from "@mui/material";
import { useAuthStore } from "../../../hooks/useAuthStore/useAuthStore";
import { TableAdmin } from "./tableTrainers";

export const HomeAdminScreen = () => {
  const { startLogout } = useAuthStore();

  const handleClickLogout = () => {
    startLogout();
  };
  return (
    <div>
      <Button variant="contained" type="button" onClick={handleClickLogout}>
        Cerrar Sesion
      </Button>
      <TableAdmin />
    </div>
  );
};

import { Button } from "@mui/material";
import React from "react";
import { useCompetidorStore } from "../../hooks/useCompetidorStore/useCompetidorStore";

export const FinishRegister = () => {
  const { startSaveEntrenadorRegistro, pokemonsTeam } = useCompetidorStore();
  return (
    <>
      {pokemonsTeam.length === 6 ? (
        <Button variant="contained" onClick={startSaveEntrenadorRegistro}>
          Finalizar Registro
        </Button>
      ) : null}
    </>
  );
};

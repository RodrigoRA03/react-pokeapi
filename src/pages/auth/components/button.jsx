import React from "react";
import { Box, Button } from "@mui/material";
import { IconContext } from "react-icons";
import { MdCatchingPokemon } from "react-icons/md";

export const ButtonSubmit = () => {
  return (
    <Box component={"div"} sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        startIcon={
          <IconContext.Provider value={{ style: { color: "white" } }}>
            <MdCatchingPokemon />
          </IconContext.Provider>
        }
      >
        Ingresar
      </Button>
    </Box>
  );
};

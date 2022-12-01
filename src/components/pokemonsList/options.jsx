import { Box, IconButton } from "@mui/material";
import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { usePokemonsStore } from "../../hooks/usePokemonsStore/usePokemonsStore";

export const Options = () => {
  const { previous, next, startGetNexPrevPokemons, startLoading } =
    usePokemonsStore();

  const getPrevPokemons = () => {
    if (!previous) return;
    startLoading();
    startGetNexPrevPokemons(previous);
  };

  const getNextPokemons = () => {
    if (!next) return;
    startLoading();
    startGetNexPrevPokemons(next);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <IconButton onClick={() => getPrevPokemons()}>
        <IconContext.Provider
          value={{
            style: {
              marginLeft: "5px",
              marginRight: "5px",
              width: "80px",
              height: "80px",
              color: "white",
            },
          }}
        >
          <AiOutlineLeft />
        </IconContext.Provider>
      </IconButton>

      <IconButton onClick={() => getNextPokemons()}>
        <IconContext.Provider
          value={{
            style: {
              marginLeft: "5px",
              marginRight: "5px",
              width: "80px",
              height: "80px",
              color: "white",
            },
          }}
        >
          <AiOutlineRight />
        </IconContext.Provider>
      </IconButton>
    </Box>
  );
};

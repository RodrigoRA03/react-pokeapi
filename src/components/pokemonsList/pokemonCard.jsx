import { Box, Button, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useCompetidorStore } from "../../hooks/useCompetidorStore/useCompetidorStore";

export const PokemonCard = ({ pokemon }) => {
  const { pokemonsTeam, addPokemonToList } = useCompetidorStore();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClickSelectPokemon = () => {
    if (pokemonsTeam.length === 6) {
      setOpenSnackbar(true);
      setTimeout(() => {
        setOpenSnackbar(false);
      }, 2000);
      return;
    }
    addPokemonToList(pokemon);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "100%",
          width: "80%",
          background: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
          borderRadius: "30px",
          backdropFilter: "blur(15px)",
          paddingY: "30px",
          cursor: "pointer",
          marginY: "20px",
        }}
      >
        <Box component="div" sx={{ zIndex: 4 }}>
          <img src={pokemon?.sprites?.other?.home?.front_default} width="200" />
        </Box>
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: "50px",
            left: "17%",
            width: "65%",
            height: "200px",
            border: "2px solid #fff",
            borderRadius: "100%",
            zIndex: "3",
          }}
        />
        <Box sx={{ marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            {pokemon?.name}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            onClick={handleClickSelectPokemon}
            sx={{
              position: "relative",
              width: "150px",
              padding: "15px 0",
              background: "linear-gradient(to right, #A2DB95, #24CCAA)",
              backgroundSize: "100%",
              backgroundPosition: "-1px",
              border: "1px solid transparent",
              borderRadius: "35px",
              color: "rgba(255, 255, 255, 0.9)",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: 1,
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            Agregar
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={2000}
        message="¡Tu equipo ya esta completo!"
      />
    </>
  );
};

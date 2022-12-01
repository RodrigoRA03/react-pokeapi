import React, { useEffect } from "react";
import { usePokemonsStore } from "../../hooks/usePokemonsStore/usePokemonsStore";
import {
  Backdrop,
  Button,
  CircularProgress,
  createTheme,
  CssBaseline,
  Grid,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import BGTeams from "../../assets/img/bg-team-pokemon.jpg";
import { Box } from "@mui/system";
import { orderListAsc } from "../../utils/orderList";
import { IconContext } from "react-icons";
import Logo from "../../assets/img/logo.png";
import { AiTwotoneSound } from "react-icons/ai";
import { PokemonCard } from "../../components/pokemonsList/pokemonCard";
import { AudioComponent } from "../../components/audioComponent/audioComponent";
import Audio from "../../assets/music/pokemon4.mp3";
import { GoMute } from "react-icons/go";
import { useCompetidorStore } from "../../hooks/useCompetidorStore/useCompetidorStore";
import { Options } from "../../components/pokemonsList/options";
import { FinishRegister } from "../../components/pokemonsList/finishRegister";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const PokemonsListScreen = () => {
  const { loading, pokemons, startGetPokemons, startLoading } =
    usePokemonsStore();
  const { muteAudio, success, statusMuteAudio } = useCompetidorStore();
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#bf360c",
      },
    },
    typography: {
      h4: {
        color: "#f5f5f5",
        textTransform: "capitalize",
      },
    },
  });

  useEffect(() => {
    if (!pokemons.length) {
      startGetPokemons({
        limit: 3,
        offset: 0,
      });
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success) {
      navigate("/");
      Swal.fire({
        title: "Correcto",
        text: "Tu registro se ha guardado correctamente",
        icon: "success",
      });
    }
  }, [success]);

  const pokemonList = orderListAsc(pokemons, "id");

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
          width: "100wv",
          backgroundImage: `url(${BGTeams})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: 0,
          paddingLeft: 20,
          paddingRight: 20,
          backdropFilter: "blur(15px)",
        }}
      >
        <IconButton
          onClick={statusMuteAudio}
          sx={{
            position: "absolute",
            top: 20,
            left: 50,
          }}
        >
          <IconContext.Provider value={{ className: "text-white" }}>
            {muteAudio ? <AiTwotoneSound /> : <GoMute />}
          </IconContext.Provider>
        </IconButton>
        <Grid
          container
          justifyContent={"center"}
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={Logo} width="400" />
            </Box>
          </Grid>
          <CssBaseline />
          {pokemonList.map((pokemon) => (
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          ))}
          <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
            <Options />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <FinishRegister />
          </Grid>
        </Grid>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={() => startLoading()}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <AudioComponent url={Audio} />
    </ThemeProvider>
  );
};

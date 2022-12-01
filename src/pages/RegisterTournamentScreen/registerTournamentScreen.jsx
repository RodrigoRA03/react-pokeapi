import React from "react";
import {
  Avatar,
  Box,
  createTheme,
  CssBaseline,
  Grid,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Name } from "../../components/registerTournament/name";
import { ApellidoMaterno } from "../../components/registerTournament/apellidoMaterno";
import { ApellidoPaterno } from "../../components/registerTournament/apellidoPaterno";
import { ButtonSubmit } from "../../components/registerTournament/buttonSubmit";
import Image from "../../assets/img/pokemon-go2.png";
import { useCompetidorStore } from "../../hooks/useCompetidorStore/useCompetidorStore";
import { useNavigate } from "react-router-dom";
import { AudioComponent } from "../../components/audioComponent/audioComponent";
import Audio from "../../assets/music/pokemon3.mp3";
import { IconContext } from "react-icons";
import { AiTwotoneSound } from "react-icons/ai";
import { GoMute } from "react-icons/go";
import { FechaNacimiento } from "../../components/registerTournament/fechaNacimiento";
import { InputTextForm } from "../../components/ui/inputTextForm";
import { Correo } from "../../components/registerTournament/correo";

export const RegisterTournamentScreen = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const { muteAudio, statusMuteAudio, addCompetidor } = useCompetidorStore();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#f5f5f5",
      },
      secondary: {
        main: "#f5f5f5",
      },
    },
  });

  const onSubmit = (data) => {
    addCompetidor(data);
    navigate("/pokemon-teams");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="principal-bg">
        <CssBaseline />
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            height: "auto",
            width: "400px",
            background: "rgba(255, 255, 255, 0.05)",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
            borderRadius: "30px",
            backdropFilter: "blur(15px)",
            paddingY: "30px",
          }}
        >
          <img src={Image} width="200" />
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "white", marginTop: "20px" }}
          >
            Registro
          </Typography>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Grid
                container
                spacing={4}
                sx={{ paddingX: "50px", paddingY: "50px" }}
              >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Name />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <ApellidoPaterno />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <ApellidoMaterno />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <FechaNacimiento />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Correo />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <ButtonSubmit />
                </Grid>
              </Grid>
            </form>
          </FormProvider>
        </Box>
      </Box>
      <AudioComponent url={Audio} />
    </ThemeProvider>
  );
};

import React from "react";
import { Box, Button, CssBaseline, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/img/pokemon-go2.png";
import { IconContext } from "react-icons";
import { AiTwotoneSound } from "react-icons/ai";
import { AudioComponent } from "../../components/audioComponent/audioComponent";
import { useCompetidorStore } from "../../hooks/useCompetidorStore/useCompetidorStore";
import { GoMute } from "react-icons/go";
import Audio from "../../assets/music/pokemon.mp3";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const { muteAudio, statusMuteAudio } = useCompetidorStore();

  const handleClickRegisterTeams = () => {
    navigate("/tournaments");
  };
  const handleClickLoginAdmin = () => {
    navigate("/auth/login");
  };

  return (
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Image} width="300" />
        <Box sx={{ marginTop: "30px" }}>
          <Button
            className="animate__animated animate__tada animate__delay-2s"
            onClick={handleClickRegisterTeams}
            sx={{
              position: "relative",
              width: "200px",
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
              fontSize: "15px",
              marginX: "15px",
            }}
          >
            Registrar Equipo
          </Button>
          <Button
            className="animate__animated animate__tada animate__delay-4s "
            onClick={handleClickLoginAdmin}
            sx={{
              position: "relative",
              width: "200px",
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
              fontSize: "15px",
              marginX: "15px",
            }}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Box>
      <AudioComponent url={Audio} />
    </Box>
  );
};

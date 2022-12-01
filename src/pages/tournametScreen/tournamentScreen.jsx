import React from "react";
import { Button, CssBaseline, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/img/standard.jpg";
import { useCompetidorStore } from "../../hooks/useCompetidorStore/useCompetidorStore";
import { IconContext } from "react-icons";
import { GoMute } from "react-icons/go";
import { AiTwotoneSound } from "react-icons/ai";
import { AudioComponent } from "../../components/audioComponent/audioComponent";
import Audio from "../../assets/music/pokemon2.mp3";

export const TournamentScreen = () => {
  const { muteAudio, statusMuteAudio, addTorneoCompetidor } =
    useCompetidorStore();
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/register-tournament");
    addTorneoCompetidor(2);
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
          minWidth: 500,
          minHeight: 250,
          backgroundColor: "#000",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          borderRadius: "30px",
          paddingBottom: "20px",
          "&::before": {
            content: '""',
            background: `url(${Image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 0,
            opacity: 0.5,
            position: "absolute",
            display: "block",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            borderRadius: "30px",
          },
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "#f5f5f5", textAlign: "center" }}
          >
            Players Cup II
          </Typography>
          <Button
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
              bottom: 0,
              right: -150,
            }}
            onClick={handleClickRegister}
          >
            Participar
          </Button>
        </Box>
      </Box>
      <AudioComponent url={Audio} />
    </Box>
  );
};

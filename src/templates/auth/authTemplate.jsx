import React from "react";
import { Box } from "@mui/system";
import {
  Avatar,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { getRandomElement } from "../../utils/randomBackgroud";
import AvatarPokeball from "../../assets/img/logo2.png";

export const AuthTemplate = ({ children }) => {
  const { Image } = getRandomElement();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f5f5f5",
      },
      secondary: {
        main: "#bf360c",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${Image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            height: "450px",
            width: "550px",
            background: "rgba(255, 255, 255, 0.05)",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
            borderRadius: "30px",
            backdropFilter: "blur(15px)",
            paddingY: "30px",
          }}
        >
          <Avatar
            src={AvatarPokeball}
            sx={{ m: 1, bgcolor: "secondary.main", width: 70, height: 70 }}
          />
          <Typography component="h1" variant="h5" sx={{ color: "white" }}>
            Iniciar Sesion
          </Typography>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

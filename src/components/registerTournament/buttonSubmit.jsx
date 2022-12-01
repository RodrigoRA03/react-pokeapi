import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ButtonSubmit = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Button
        type="submit"
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
        Siguiente
      </Button>
    </Box>
  );
};

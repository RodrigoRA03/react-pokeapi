import { InputAdornment } from "@mui/material";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { IconContext } from "react-icons";
import { MdEmail } from "react-icons/md";
import { InputTextForm } from "../../../components/ui/inputTextForm";
import { textFieldAuthStyles } from "../../../styles/authStyles";

export const Email = () => {
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue("email", "example@example.com", { shouldDirty: true });
  }, []);

  return (
    <InputTextForm
      name="email"
      label="Correo"
      sx={textFieldAuthStyles}
      autoComplete="off"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconContext.Provider value={{ style: { color: "#f5f5f5" } }}>
              <MdEmail />
            </IconContext.Provider>
          </InputAdornment>
        ),
      }}
    />
  );
};

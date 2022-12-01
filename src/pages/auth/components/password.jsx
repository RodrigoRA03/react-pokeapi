import React, { useEffect, useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { InputTextForm } from "../../../components/ui/inputTextForm";
import { textFieldAuthStyles } from "../../../styles/authStyles";
import { IconContext } from "react-icons";
import { useFormContext } from "react-hook-form";

export const Password = () => {
  const { setValue } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setValue("password", "password", { shouldDirty: true });
  }, []);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <InputTextForm
      name="password"
      type={showPassword ? "text" : "password"}
      label="Contraseña"
      sx={textFieldAuthStyles}
      autoComplete="off"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconContext.Provider value={{ style: { color: "#f5f5f5" } }}>
              <RiLockPasswordLine />
            </IconContext.Provider>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              <IconContext.Provider value={{ style: { color: "#f5f5f5" } }}>
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </IconContext.Provider>
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

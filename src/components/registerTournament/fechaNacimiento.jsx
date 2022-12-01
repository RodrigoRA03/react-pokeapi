import React from "react";
import { useFormContext } from "react-hook-form";
import { textFieldAuthStyles } from "../../styles/authStyles";
import { InputTextForm } from "../ui/inputTextForm";

export const FechaNacimiento = () => {
  const methods = useFormContext();
  return (
    <InputTextForm
      name="fechaNacimiento"
      type="date"
      label="Fecha de Nacimiento"
      className="w-full"
      autoComplete="off"
      size="small"
      sx={textFieldAuthStyles}
      error={methods.formState.errors?.fechaNacimiento ? true : false}
      helperText={
        methods.formState?.errors?.fechaNacimiento
          ? methods.formState?.errors?.fechaNacimiento.message
          : ""
      }
      rules={{
        required: {
          value: true,
          message: "La fecha de nacimiento es un campo obligatorio",
        },
      }}
    />
  );
};

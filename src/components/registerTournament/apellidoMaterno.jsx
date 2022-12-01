import React from "react";
import { useFormContext } from "react-hook-form";
import { textFieldAuthStyles } from "../../styles/authStyles";
import { InputTextForm } from "../ui/inputTextForm";

export const ApellidoMaterno = () => {
  const methods = useFormContext();
  return (
    <InputTextForm
      name="apellidoMaterno"
      label="Apellido Materno"
      className="w-full"
      autoComplete="off"
      size="small"
      sx={textFieldAuthStyles}
      error={methods.formState.errors?.apellidoMaterno ? true : false}
      helperText={
        methods.formState?.errors?.apellidoMaterno
          ? methods.formState?.errors?.apellidoMaterno.message
          : ""
      }
      rules={{
        required: {
          value: true,
          message: "El apellido materno es un campo obligatorio",
        },
      }}
    />
  );
};

import React from "react";
import { useFormContext } from "react-hook-form";
import { textFieldAuthStyles } from "../../styles/authStyles";
import { InputTextForm } from "../ui/inputTextForm";

export const Correo = () => {
  const methods = useFormContext();
  return (
    <InputTextForm
      name="correo"
      type="email"
      label="Correo Electronico"
      className="w-full"
      autoComplete="off"
      size="small"
      sx={textFieldAuthStyles}
      error={methods.formState.errors?.correo ? true : false}
      helperText={
        methods.formState?.errors?.correo
          ? methods.formState?.errors?.correo.message
          : ""
      }
      rules={{
        required: {
          value: true,
          message: "El correo es un campo obligatorio",
        },
      }}
    />
  );
};

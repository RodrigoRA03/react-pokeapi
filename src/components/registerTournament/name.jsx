import React from "react";
import { useFormContext } from "react-hook-form";
import { textFieldAuthStyles } from "../../styles/authStyles";
import { InputTextForm } from "../ui/inputTextForm";

export const Name = () => {
  const methods = useFormContext();
  return (
    <InputTextForm
      name="nombre"
      label="Nombre"
      className="w-full"
      autoComplete="off"
      size="small"
      error={methods.formState.errors?.nombre ? true : false}
      helperText={
        methods.formState?.errors?.nombre
          ? methods.formState?.errors?.nombre.message
          : ""
      }
      rules={{
        required: {
          value: true,
          message: "El nombre es un campo obligatorio",
        },
      }}
      sx={textFieldAuthStyles}
    />
  );
};

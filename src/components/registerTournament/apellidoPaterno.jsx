import React from "react";
import { useFormContext } from "react-hook-form";
import { textFieldAuthStyles } from "../../styles/authStyles";
import { InputTextForm } from "../ui/inputTextForm";

export const ApellidoPaterno = () => {
  const methods = useFormContext();
  return (
    <InputTextForm
      name="apellidoPaterno"
      label="Apellido Paterno"
      autoComplete="off"
      className="w-full"
      sx={textFieldAuthStyles}
      size="small"
      error={methods.formState.errors?.apellidoPaterno ? true : false}
      helperText={
        methods.formState?.errors?.apellidoPaterno
          ? methods.formState?.errors?.apellidoPaterno.message
          : ""
      }
      rules={{
        required: {
          value: true,
          message: "El apellido paterno es un campo obligatorio",
        },
      }}
    />
  );
};

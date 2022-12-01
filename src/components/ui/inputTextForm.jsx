import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "fontColor",
})(({ fontColor }) => ({
  input: {
    color: "#f5f5f5",
  },
}));

export const InputTextForm = ({ name = "", label = "", ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <StyledTextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          focused
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
      )}
      rules={props.rules}
    />
  );
};

import React from "react";
import { Grid, Box, Button, InputAdornment } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { InputTextForm } from "../../components/ui/inputTextForm";
import { MdEmail, MdVisibilityOff } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AuthTemplate } from "../../templates/auth/authTemplate";
import { Email } from "./components/email";
import { Password } from "./components/password";
import { ButtonSubmit } from "./components/button";
import { useAuthStore } from "../../hooks/useAuthStore/useAuthStore";

export const LoginScreen = () => {
  const methods = useForm();
  const { startLogin } = useAuthStore();

  const onSubmit = (data) => {
    startLogin(data);
  };

  return (
    <AuthTemplate>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={4}
            sx={{ paddingX: "50px", paddingY: "50px" }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Email />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Password />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <ButtonSubmit />
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </AuthTemplate>
  );
};

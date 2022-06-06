/* eslint-disable react-hooks/exhaustive-deps */
import { Button, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuthenticationContext } from "../../context/AuthenticationContext";
import { handleUserProfile } from "../../firebase-config/config";
import { FirebaseLoginApiErrors, validateEmail } from "../../util/constants";

import { Container } from "./styles";

const Login = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { socialMediaLogin, emailLogin } = useAuthenticationContext();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const socialMediaLoginResponse = useCallback(async (name) => {
    try {
      await socialMediaLogin(name);
    } catch (error) {}
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    const { email, password } = data;
    try {
      const { user } = await emailLogin(email, password);
      await handleUserProfile(user);
      reset();
    } catch (error) {
      setLoginError(FirebaseLoginApiErrors[error.code]);
    }
    setLoading(false);
  };

  return (
    <Container>
      <form className="login-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <h2>GhostPalette</h2>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email é necessário",
            validate: {
              validateEmail: (value) => {
                if (!validateEmail(value)) {
                  return "Email inválido";
                }
              },
            },
          }}
          render={({ field: { onChange, ref, value } }) => (
            <TextField
              type="email"
              variant="standard"
              fullWidth
              label="Email"
              onChange={(e) => onChange(e.target.value)}
              value={value}
              ref={ref}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            ></TextField>
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Por favor digite sua senha",
          }}
          render={({ field: { onChange, ref, value } }) => (
            <TextField
              type="password"
              variant="standard"
              fullWidth
              label="Senha"
              onChange={(e) => onChange(e.target.value)}
              value={value}
              ref={ref}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            ></TextField>
          )}
        />
        <span className="error-handler">{loginError}</span>
        <Button type="submit" variant="contained" fullWidth disabled={loading}>
          Entrar
        </Button>

        <span className="separator">
          <h4>ou</h4>
        </span>

        <button
          className="facebook"
          name="facebook"
          onClick={(e) => socialMediaLoginResponse(e.target.name)}
          type="button"
        >
          <i className="fa-brands fa-facebook-f"></i>
          Entrar com facebook
        </button>

        <button
          className="google"
          name="google"
          onClick={(e) => socialMediaLoginResponse(e.target.name)}
          type="button"
        >
          <i className="fa-brands fa-google" />
          Entrar com google
        </button>

        <span className="separator">
          <h4>Não possui cadastro?</h4>
        </span>
        <Link to="/registration">Clique aqui e cadastre-se!</Link>
      </form>
    </Container>
  );
};

export default Login;

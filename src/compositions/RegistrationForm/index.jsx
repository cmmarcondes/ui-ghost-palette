import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { Container } from "./styles";
import { handleUserProfile, auth } from "../../firebase-config/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { FirebaseLoginApiErrors, validateEmail } from "../../util/constants";

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    const { displayName, email, password } = data;
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      reset();
      history.push("/login");
      setLoading(false);
    } catch (error) {
      setLoginError(FirebaseLoginApiErrors[error.code]);
      setLoading(false);
    }
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h2>Crie seu cadastro</h2>
      <Controller
        control={control}
        name="displayName"
        rules={{
          required: "Nome é necessário",
        }}
        render={({ field: { onChange, ref, value } }) => (
          <TextField
            type="text"
            variant="standard"
            fullWidth
            label="Nome"
            onChange={(e) =>
              onChange(e.target.value.replace(/[^a-zA-Z ]+/g, ""))
            }
            value={value}
            ref={ref}
            error={!!errors.displayName?.message}
            helperText={errors.displayName?.message}
          ></TextField>
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email é necessário",
          validate: {
            validateEmail: (value) => {
              if(!validateEmail(value)) {
                return "Email inválido"
              }
            }
          }
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
          minLength: {
            value: 6,
            message: "Sua senha precisa de pelo menos 6 dígitos",
          },
          required: "Por favor escolha uma senha",
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
      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          minLength: {
            value: 6,
            message: "Sua senha precisa de pelo menos 6 dígitos",
          },
          required: "Por favor digite a senha novamente",
          validate: {
            sameValue: (value) => {
              if (getValues().password !== value) {
                return "As senhas precisam ser iguais";
              }
            },
          },
        }}
        render={({ field: { onChange, ref, value } }) => (
          <TextField
            type="password"
            variant="standard"
            fullWidth
            label="Confirme sua senha"
            onChange={(e) => onChange(e.target.value)}
            value={value}
            ref={ref}
            error={!!errors.confirmPassword?.message}
            helperText={errors.confirmPassword?.message}
          ></TextField>
        )}
      />
      <span className="error-handler">{loginError}</span>
      <Button type="submit" variant="contained" fullWidth disabled={loading}>
        Criar
      </Button>
      <span className="separator">
        <h4>ou</h4>
      </span>
      <div className="already-registered">
        <Link to="/login">já tenho cadastro</Link>
      </div>
    </Container>
  );
};

export default RegistrationForm;

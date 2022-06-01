import { Grid } from "@mui/material";
import * as yup from "yup";
import React, { useCallback, useEffect, useState } from "react";
import * as Styled from "./login.styled";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = useCallback(
    ({ target }: any) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData]
  );

  const handleSubmit = useCallback(async () => {
    try {
      const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
      });

      await schema.validate(data);
      setError("")
    } catch (error: any) {
      setError(error.errors[0]);
      console.log(error);
    }
  }, [data]);

  return (
    <Styled.Wrapper container justifyContent="center" alignContent="center">
      <Grid xs={2} container justifyContent="center" alignContent="center">
        <Styled.Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <Styled.Input
          type="text"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <Styled.Button onClick={handleSubmit}>Entrar</Styled.Button>
        <Styled.Error>{error}</Styled.Error>
      </Grid>
    </Styled.Wrapper>
  );
}

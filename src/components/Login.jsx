import React from "react";
import "../assets/Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { link } from "react-router-dom";
function Login() {
  return (
    <Box
      className="container"
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <Typography className="campo titulo-form" variant="h5" component="h2">
        Faça seu Login
      </Typography>
      <TextField className="campo" label="Usuário" id="fullWidth" />
      <TextField className="campo" label="Senha" id="fullWidth" />
     
    <Button className="campo botao" variant="contained">Logar</Button>

    </Box>
  );
}

export default Login;

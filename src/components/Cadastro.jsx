import React from "react";
import "../assets/Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {FormControl, RadioGroup, Radio, FormLabel, FormControlLabel} from "@mui/material"
import { link } from "react-router-dom";
function Cadastro() {
  return (
    <Box
      className="container"
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <Typography className="campo titulo-form" variant="h5" component="h2">
        Faça seu Cadastro
      </Typography>
      <TextField className="campo" label="Nome Completo" id="fullWidth" />
      <TextField className="campo" label="Telefone" id="fullWidth" type="number"/>
      <FormControl>
      <Typography className="campo titulo-form" variant="h6" component="h2">
        O que você é ?
      </Typography>
  <RadioGroup className="radio"
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Médico" />
    <FormControlLabel value="male" control={<Radio />} label="Paciente" />
    <FormControlLabel value="other" control={<Radio />} label="Clínica" />
  </RadioGroup>
</FormControl>
      <TextField className="campo" label="Usuário" id="fullWidth" />
      <TextField className="campo" label="Senha" id="fullWidth" type="password" />
     
    <Button className="campo botao" variant="contained">Cadastrar</Button>

    </Box>
  );
}

export default Cadastro;

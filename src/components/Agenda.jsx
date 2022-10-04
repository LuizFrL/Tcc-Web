import React from "react";
import img from "../img.jpeg"
import {link} from "react-router-dom"
function Agenda() {
  return (
    <div className="container agenda">
      <img className="img" width="40px" height="40px" src={img}></img>
      <h2>Dra. Letícia Abreu</h2>
      <h3>Dermatologista</h3>
      <h2 className="end">Agenda: Dra. Letícia Abreu</h2>

      <div className="linha end">
        <h4 className="end">Data:</h4>
        <input type="date"></input>
      </div>

      <h2 className="end">Selecione o horário desejado: </h2>
      <div className="linha end">
        <h3 className="end horario">08:00</h3>
        <h3 className="end horario">09:00</h3>
        <h3 className="end horario">10:00</h3>
      </div>
    </div>
  );
}

export default Agenda;

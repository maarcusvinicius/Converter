import React, { Component, useState, useEffect } from "react";
import "./style.css";

import Conversor from "../../components/Conversor";

export class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        </div>
        <div className="linha">
          <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
        </div>
        <div className="linha">
          <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
        </div>
      </div>
    );
  }
}
import React, { Component } from "react";
import "./Conversor.css";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    };

    this.converter = this.converter.bind(this);
  }

  converter() {
    let de_para = `${this.props.moedaA}-${this.props.moedaB}`;
    let para = `${this.props.moedaA}${this.props.moedaB}`;
    let url = `https://economia.awesomeapi.com.br/json/last/${de_para}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let cotacao = json[para];
        let valor = cotacao["ask"];
        console.log(cotacao);
        console.log(valor);

        let moedaB_valor = (
          parseFloat(this.state.moedaA_valor) * valor
        ).toFixed(2);
        this.setState({ moedaB_valor });
      });
  }

  render() {
    return (
      <div className="conversor">
        <h2>
          {this.props.moedaA} para {this.props.moedaB}
        </h2>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ moedaA_valor: event.target.value });
          }}
        />
        <button type="button" onClick={this.converter}>
          Converter
        </button>
        <h2>{this.state.moedaB_valor}</h2>
      </div>
    );
  }
}
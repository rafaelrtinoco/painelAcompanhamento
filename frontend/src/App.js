/* eslint-disable no-unused-vars */

import api from "./services/api";

import React, { useState, useEffect } from "react";
import moment from 'moment-timezone';
//import 'moment/locate/pt-br';



import "./app.css";
import "./main.css";
import "./global.css";
import "./sidebar.css";

import logo from "./img/braspress-logo.png";

import Chamado from "./Components/Chamados/index";
// import RadioButton from "./Components/RadioButton";

function App() {
  const [filial, setFilial] = useState("");
  const [operadora, setOperadora] = useState("");
  const [solicitante, setSolicitante] = useState("");
  const [numeroChamado, setNumeroChamado] = useState("");
  const [dataAbertura, setDataAbertura] = useState("");
  const [servico, setServico] = useState("");


  const [allChamados, setAllChamados] = useState([]);

  useEffect(() => {
    async function getAllChamados() {
      const response = await api.get("/annotations");

      setAllChamados(response.data);
    }

    getAllChamados();
  }, []);

  async function handleDelete(id){
    const deletedChamado = await api.delete(`/annotations/${id}`)

    if(deletedChamado) {
      setAllChamados(allChamados.filter(chamado => chamado._id !== id))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/annotations", {
      filial,
      operadora,
      solicitante,
      numeroChamado,
      dataAbertura,
      servico,
      priority: true,
    });
    setFilial("");
    setOperadora("");
    setSolicitante("");
    setNumeroChamado("");
    setDataAbertura("");
    setServico("");
    

    //atualizando automaticamente ao inserir novo chamado
    setAllChamados([...allChamados, response.data]);


    const formattedDateTime = moment(dataAbertura.date).format('DD/MM/YYYY [às] HH:mm');
    console.log(formattedDateTime)

 
  }

   useEffect(() => {
    function habilitarButton() {
      let btn = document.getElementById("btn_submit");
      btn.style.background = "#FFD3CA";
      if (
        filial &&
        operadora &&
        solicitante &&
        numeroChamado &&
        dataAbertura &&
        servico
      ) {
        btn.style.background = "#1d388a";
      }
    }
    habilitarButton();
  }, [filial, operadora, solicitante, numeroChamado, dataAbertura, servico]);

  return (
    <div id="app">
      <aside>
        <img src={logo} alt="logo-braspa" />
        <strong>Painel para Registro de Incidentes</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="filial">Filial:</label>
            <input
              maxLength={8}
              required
              value={filial}
              onChange={(e) => setFilial(e.target.value)}
            />
            <label htmlFor="operadora">Operadora:</label>
            <input
              maxLength={20}
              required
              value={operadora}
              onChange={(e) => setOperadora(e.target.value)}
            />
            <label htmlFor="solicitante">Solicitante:</label>
            <input
              maxLength={20}
              required
              value={solicitante}
              onChange={(e) => setSolicitante(e.target.value)}
            />
            <label htmlFor="numeroChamado">Número do Chamado:</label>
            <input
              maxLength={20}
              required
              value={numeroChamado}
              onChange={(e) => setNumeroChamado(e.target.value)}
            />
            <label htmlFor="dataAbertura">Data de Abertura:</label>
            <input
              type="datetime-local"
               required
              value={dataAbertura}
              onChange={(e) => setDataAbertura(e.target.value)}
            />
            <label htmlFor="servico">Tipo de Serviço:</label>
            <select value={servico}
              onChange={(e) => setServico(e.target.value)}>
                <option value="" disabled>Qual o serviço com problemas?</option>
                <option value="Dados">Dados</option>
                <option value="Voz">Voz</option>        
              </select>
            <button id="btn_submit" type="submit">
              Criar
            </button>
          </div>
        </form>
        {/* < RadioButton /> */}
      </aside>
      <main>
        <ul>
          {allChamados.map((data) => (
            <Chamado 
            // key={data._id}
            data={data} 
            handleDelete={handleDelete}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

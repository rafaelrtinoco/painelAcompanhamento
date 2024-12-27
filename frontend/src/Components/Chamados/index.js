import React from "react";
import moment from "moment-timezone";
import "moment/locale/pt-br";

import Timer from './Timer'

// eslint-disable-next-line no-unused-vars
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";

import "./style.css";
import "./style-priority.css";

function Chamados({ data, handleDelete }) {
  const formattedDateTime = moment
    .tz(data.dataAbertura, "America/Sao_Paulo")
    .format("DD/MM/YYYY HH:mm");

  return (
    <>
      <li className={data.priority ? "chamado-priority" : "chamado"}>
        <div>
          <strong>Incidente Registrado</strong>

          <div>
            {" "}
            Filial: <span>{data.filial}</span>{" "}
          </div>
          <div>
            Operadora: <span>{data.operadora}</span>
          </div>
          <div>
            Solicitante: <span>{data.solicitante}</span>
          </div>
          <div>
            Numero do chamado: <span>{data.numeroChamado}</span>
          </div>
          <div>
            Data de abertura: <span>{formattedDateTime}</span>
          </div>
          <div>
            Tipo do serviço: <span>{data.servico}</span>
          </div>
          <div>
            Tipo do serviço: <span>{Timer.formataTempo}</span>
          </div>

          <div className="trash">
            <AiTwotoneDelete size={18} onClick={() => handleDelete(data._id)} />

            {/* <AiOutlineExclamationCircle size={18}/>              */}
          </div>
        </div>
      </li>
    </>
  );
}

export default Chamados;

import { useState, useEffect } from 'react';

const ContagemRegressiva = () => {
      
  const tempoInicial = 4 * 60 * 60; 

  const[tempoRestante, setTempoRestante] = useState(tempoInicial);

  useEffect(() => {
    if (tempoRestante <= 0) return;

    // atualizando o tempo a cada segundo
    const timer = setInterval(() => {
      setTempoRestante((prev) => prev - 1);
    }, 1000);

    // limpa o intervalo quando o componente é desmontado ou o tempo chega a 0
    return () => clearInterval(timer);
  }, [tempoRestante]);

  //converte o tempo restante para horas, minutos e segundos
  // eslint-disable-next-line no-unused-vars
  const formataTempo = (segundos) => {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60)
    const secs = segundos % 60;

    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  console.log(formataTempo)

}

export default ContagemRegressiva;
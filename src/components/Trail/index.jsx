import { currentColor3, currentColor1 } from "../../styles/globalStyles";
import { Line } from "react-chartjs-2";

const data = {
  //informações passadas para o componente
  options: {
    legend: {
      display: false,
    },
    layout: {
      padding: {
        top: 140,
        bottom: 100,
        right: 40,
        left: 40,
      },
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
    },
  },
  labels: [1, 2, "sou uma string", 4, 5, 6, 7], //Informações em cada node, pode ser string ou number

  datasets: [
    {
      fill: false, //preenchimento do espaço entre a base da tela e a linha
      lineTension: 0.1, //o quão suave são as curvas da linha
      borderColor: currentColor3,
      borderDash: [15], //tamanho do traçado da linha
      pointBorderColor: currentColor1,
      pointBackgroundColor: currentColor1,
      pointBorderWidth: 15, //tamanho da borda dos nodes
      pointHoverRadius: 30, //tamanho dos nodes quando passa o mouse
      pointHoverBackgroundColor: currentColor1,
      pointHoverBorderColor: currentColor3,
      pointHoverBorderWidth: 5, //grossura da borda dos nodes quando passa o mouse
      pointRadius: 15, //tamanho dos nodes
      pointHitRadius: 15, //tamanho dos nodes quando passa o mouse
      data: [
        //altura dos nodes no grafico
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
      ],
    },
  ],
};

const Trail = () => {
  return <Line data={data} options={data.options} />;
};

export default Trail;

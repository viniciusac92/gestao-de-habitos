import { currentColor3, currentColor1 } from "../../styles/globalStyles";
import { Line } from "react-chartjs-2";
import { useHabits } from "../../Providers/Habits";

const data = (averageHabits) => {
  console.log(averageHabits());
  return {
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
    labels: [
      "atividades feitas no dia 1:",
      "atividades feitas no dia 2:",
      "atividades feitas no dia 3:",
      "atividades feitas no dia 4:",
      "atividades feitas no dia 5:",
      "atividades feitas no dia 6:",
      "atividades feitas no dia 7:",
    ],

    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        borderColor: currentColor1,
        borderDash: [5],
        pointBorderColor: currentColor1,
        pointBackgroundColor: currentColor3,
        pointBorderWidth: 15,
        pointHoverRadius: 30,
        pointHoverBackgroundColor: currentColor1,
        pointHoverBorderColor: currentColor3,
        pointHoverBorderWidth: 5,
        pointRadius: 15,
        pointHitRadius: 15,
        data: [
          averageHabits()[0],
          averageHabits()[1],
          averageHabits()[2],
          averageHabits()[3],
          averageHabits()[4],
          averageHabits()[5],
          averageHabits()[6],
        ],
      },
    ],
  };
};

const Trail = () => {
  const { averageHabits } = useHabits();

  return (
    <Line data={data(averageHabits)} options={data(averageHabits).options} />
  );
};

export default Trail;

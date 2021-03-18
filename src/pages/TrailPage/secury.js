import { motion } from "framer-motion";
import {
  animationWrapperStyle,
  currentColor3,
  currentColor1,
} from "../../styles/globalStyles";
import { Line } from "react-chartjs-2";

const data = {  
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false, 
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false, 
          },
        },
      ],
    },
  },
  labels: [1, 2, "sou uma string", 4, 5, 6, 7], 

  datasets: [
    {
      fill: false, 
      lineTension: 0.1, 
      borderColor: currentColor3,
      borderDash: [15], 
      pointBorderColor: currentColor1,
      pointBackgroundColor: currentColor1,
      pointBorderWidth: 50, 
      pointHoverRadius: 55, 
      pointHoverBackgroundColor: currentColor1,
      pointHoverBorderColor: currentColor3,
      pointHoverBorderWidth: 5, 
      pointRadius: 10, 
      pointHitRadius: 10, 
      data: [        
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

const LoginPage = () => {
  return (
    <motion.div
      style={animationWrapperStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Line data={data} options={data.options} />
    </motion.div>
  );
};

export default LoginPage;

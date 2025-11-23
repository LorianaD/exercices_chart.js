import React from "react";
import { Chart as ChartJS, LineElement,PointElement, LinearScale, CategoryScale, Tooltip, Legend} from "chart.js";
import { Line } from "react-chartjs-2";

// Enregistrer les éléments
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

function LineChart() {
  const data = {
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    datasets: [
      {
        label: "Poids (kg)",
        data: [69, 71, 70, 69, 68, 67],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3, // courbe arrondie
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return <Line data={data} options={options} />;
}

export default LineChart;
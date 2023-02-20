import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Complaints",
      data: [3, 5, 7, 2, 8, 4, 6],
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const BarChart = () => {
    return <Bar width={400} height={200} data={data} options={options} />;
};

export default BarChart;

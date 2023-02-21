import React from "react";
import { Bar } from "react-chartjs-2";
import { useTheme } from "@mui/material/styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"]


export const options = {
  responsive: true,
  maintainAspectRatio:false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Average Complaint",
    },
   
  },

};
const data = {
  labels,
  datasets: [
    {
      label: "Complains",
      data: [15, 13, 23, 15, 22, 16, 7],
      backgroundColor: "purple",
    },
  ],
};

const BarChart = () => {
 
  
  return <Bar data={data} options={options} />;
};

export default BarChart;

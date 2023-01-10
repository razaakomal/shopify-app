import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement,
   Tooltip,
    Legend);

export default function DonutChart(props) {
  return <Doughnut data={props.data} options={props.options} />;
}
import React from "react";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0)",
      borderColor: "rgba(250,250,250,1)",
    },
  ]
};

const lineOptions = {
  scales: {
    x: {
      grid: {
        color: 'white',
        borderColor: 'white',
        tickColor: 'white',
        borderDash: [5,],
        lineWidth: 0.23,
        borderColor: 'rgba(255, 255, 255, 0.12)',
      },
      ticks: {
        color: 'white'
      } 
    },
    y: {
      grid: {
        color: 'white',
        lineWidth: 0.23,
        borderColor: 'white',
        tickColor: 'white',
        borderDash: [5,],
        borderColor: 'rgba(255, 255, 255, 0.46)'
      },
      ticks: {
        color: 'white'
      }
    }
  },
  plugins:{
    legend: {
      display: false
    }
  },
  datalables: {
    display: false
  }
};

export default function Graph1() {
  return (
    <div className="Graph1">
      <Line data={data} options={lineOptions} />
    </div>
  );
}

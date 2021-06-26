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
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        // stacked: true,
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          // Return an empty string to draw the tick line but hide the tick label
          // Return `null` or `undefined` to hide the tick line entirely
          userCallback(value) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join(".");
            return `Rp.${value}`;
          }
        }
      }
    ]
  },
  legend: {
    display: true
  },
  tooltips: {
    enabled: false
  }
};

export default function Graph1() {
  return (
    <div className="Graph1">
      <Line data={data} options={lineOptions} />
    </div>
  );
}

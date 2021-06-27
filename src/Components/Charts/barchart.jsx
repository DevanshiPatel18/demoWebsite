import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Bar} from 'react-chartjs-2';


const useStyles = makeStyles({

});

export default function MyBarChart(){
    const classes = useStyles();

    const  data = {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                //stack: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
              },
    
            ]
        };
    const options = {
        offsetGridLines: true,
        drawTicks: true,
        layout: {
        },
        legend: {
          display: false,
          position: "right",
          align: "start",
          labels: {
            usePointStyle: true
          }
        },plugins:{
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                padding: 5
              },
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              gridLines: {
                drawBorder: false
              },
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 6,
                padding: 20,
                callback(n) {
                  if (n < 1e3) return n;
                  if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
                }
              }
            }
          ]
        }
    };
    return (
      <div className="App">
      <Bar
        pointStyle="star"
        data={data}
        options = {options}
        style= {{width:100+'%', height: 320}}
      />
    </div>
    );
};
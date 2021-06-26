import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

const useStyles = makeStyles({

});

export default function MyPieChart(){

    const classes = useStyles();

    
const data = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [10, 20, 60],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };
  
  const options = {
    cutoutPercentage: 80,
    animation: false,
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 0,
        onHover: function(data) {
          console.log(1, data);
        }
      }
    }
  };
  

    return (
        <div>
        <Doughnut data={data} options={options} />
        </div>
    );
}


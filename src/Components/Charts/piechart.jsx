import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import { Pie } from "react-chartjs-2";

const useStyles = makeStyles({
  root: {
    width: 100+'%',
    height: 100+'%',
  }
});

export default function MyPieChart(){

    const classes = useStyles();

    
const data = {
    labels: ["Defective", "Non-Defective"],
    datasets: [
      {
        data: [1000,70000],
        backgroundColor: ["#FF6384", "#36A2EB"]
      }
    ]
  };
  
  const options = {
    cutoutPercentage: 0,
    animation: true,
    maintainAspectRatio: true,
    elements: {
      arc: {
        borderWidth: 0,
        onHover: function(data) {
          console.log(1, data);
        }
      }
    },
    legend:{
      display: false,
      poistion: 'right'
    },
    datalables: {
      display: true
    }
  };
  

    return (
        <div className= {classes.root}>
        <Pie data={data} options={options} />
        </div>
    );
}


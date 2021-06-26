import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Graph1 from '../Dashboard/graphs';
import { Typography } from '@material-ui/core';
import { Grid, Card, CardActionArea, CardContent, CardHeader} from '@material-ui/core';
import MyBarChart from './barchart';
import MyPieChart from './piechart';

const useStyles = makeStyles({
    root: {
        fontFamily:'Comfortaa, cursive',
    },
    h2: {
        fontFamily:'Comfortaa, cursive',
        textAlign: 'center',
    },
    card: {
        position: 'relative',
        overflow: 'visible',
        display: 'inline-block',
        width: 24+ '%',
        marginLeft: 1+'%',
    },
    graph: {
        position: 'absolute',
        top: '-'+10+'%',
        left: 5+'%',
        width: 90+'%',
         padding:2+'%',
         borderRadius: 8+'%',
         height: 80+'%'
    },
    graphcard: {
        width: 45+'%',
        height: 30+'%',
        display: 'inline-block',
        marginRight: 5+'%'
    },
    grid: {
        marginTop: 5+'%'
    }
});

export default function ChartsMain(){
    const classes = useStyles();
    const graphs = [
        {   type: 'OEE',
            backgroundColor: 'yellow'
        },{
            type: 'Performance',
            backgroundColor: 'pink'
        }, {
            type: 'Quality',
            backgroundColor: 'orange'
        },{
            type: 'Availibilty',
            backgroundColor: 'red'
        }
    ];

    return(
    <div>
        <Grid className={classes.grid}>
             <Typography style={{marginBottom: 5+'%'}}><h2 className = {classes.h2}>Overall Analysis</h2></Typography>
            {graphs.map((graph) => (
                <Card className = {classes.card}>
                <CardActionArea className= {classes.graph} style={{backgroundColor: graph.backgroundColor}}>
                    <Graph1></Graph1>
                </CardActionArea>
            <CardContent style={{marginTop:70+'%'}}>
                    <h6 >{graph.type}</h6>
            </CardContent>
            </Card>
            ))}
            
        </Grid>
        <Grid className = {classes.grid}>
            
                    <h6>Hello</h6>
        </Grid>
    </div>
    )
}
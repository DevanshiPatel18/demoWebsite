import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Graph1 from '../Dashboard/graphs';
import { Typography, Paper } from '@material-ui/core';
import { Grid, Card, CardActionArea, CardContent} from '@material-ui/core';
import MyBarChart from './barchart';
import MyPieChart from './piechart';
import { Timeline } from '@material-ui/icons';
import { red, green, blue, orange } from '@material-ui/core/colors';

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
        marginTop: 5+'%',
    },
    logo: {
        display: 'inline',
        position: 'absolute',
        width: 10+'%',
        height: 15+'%',
        top: '-'+5+'%',
        left: 2+'%',

    }
});

export default function ChartsMain(){
    const classes = useStyles();
    const graphs = [
        {   type: 'OEE',
            backgroundColor: red[500]
        },{
            type: 'Performance',
            backgroundColor: blue[500]
        }, {
            type: 'Quality',
            backgroundColor: green[500]
        },{
            type: 'Availibilty',
            backgroundColor: orange[500]
        }
    ];

    return(
    <div>
        <Typography style={{marginBottom: 5+'%'}}><h2 className = {classes.h2}>Overall Analysis</h2></Typography>
        <Grid className={classes.grid}>
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
        <Grid>
        <Grid className = {classes.grid} style={{width: 48+'%',marginLeft: 1+'%',position: 'relative', overflow: 'visible', display: 'inline-block'}}>
        <Paper className= {classes.logo} style ={{backgroundColor: red[500], padding: 2+'%'}} component= {Timeline}></Paper>
            <Card style={{ display: 'flex', justifyContent: 'center', padding: 2+'%'}}>
            <CardContent>
                <Typography>
                    <h4>Manufacted Part Detailes</h4>
                </Typography>                
                <MyPieChart className={classes.pieChart}></MyPieChart>
                </CardContent>
            </Card>
        </Grid>
        <Grid className = {classes.grid} style={{marginLeft: 2+'%',width: 48+'%',position: 'relative', overflow: 'visible',display: 'inline-block'}}>
        <Paper className= {classes.logo} style ={{backgroundColor: green[500], padding: 2+'%'}} component= {Timeline}></Paper>
            <Card style={{ display: 'flex', justifyContent: 'center', padding: 2+'%'}}>
            <CardContent>
                <Typography>
                    <h4>Manufacted Part Detailes</h4>
                </Typography>                
                <MyBarChart className={classes.pieChart}></MyBarChart>
                </CardContent>
            </Card>
        </Grid>
        </Grid>
    </div>
    )
}
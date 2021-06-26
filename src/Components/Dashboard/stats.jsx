import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import Graph1 from './graphs';

const useStyles = makeStyles({
    card: {
        position: 'relative',
        overflow: 'visible',
        display: 'inline-block',
        width: 21+ '%',
        marginLeft: 1+'%'
    },
    graph: {
        position: 'absolute',
        top: '-'+10+'%',
        left: 5+'%',
        width: 90+'%',
         padding:1+'%',
         paddingTop: 0,
         borderRadius: 8+'%',
         height: 80+'%'
    }
})

export default function Statistics(){
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
    ]
    return(
        <Grid style={{textAlign: 'center'}}>
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
    );
} 
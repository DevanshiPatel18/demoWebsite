import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import Graph1 from './graphs';

const useStyles = makeStyles({
    card: {
        position: 'relative',
        display: 'inline-block',
        width: 24+ '%',
        marginRight: 1+'%',
        height: 50+'%',
        minHeight:200,
        overflow: 'visible'
    },
    graph: {
        position: 'absolute',
        top: '-'+8+'%',
        left: 5+'%',
        width: 90+'%',
         padding:2+'%',
         borderRadius: 8+'%'
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
        <Grid style={{}}>
            {graphs.map((graph) => (
                <Card className = {classes.card}>
                <CardActionArea className= {classes.graph} style={{backgroundColor: graph.backgroundColor}}>
                    <Graph1></Graph1>
                </CardActionArea>
            <CardContent style={{marginTop:45+'%'}}>
                    <h6 >{graph.type}</h6>
            </CardContent>
            </Card>
            ))}
            
        </Grid>
    );
} 
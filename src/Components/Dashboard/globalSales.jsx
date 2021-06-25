import { Card,CardHeader, CardContent, Grid, Paper} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Language } from '@material-ui/icons';
import { Table, TableRow, TableCell ,TableHead, TableBody } from '@material-ui/core';
import {VectorMap} from 'react-jvectormap';
import { useRef } from 'react';

const useStyles = makeStyles({
    paper: {
        display: 'inline-block',
        width: 45+ '%',
        marginRight: 3 + '%',
        marginLeft: 2 + '%',
        height: 500
    },
    icon: {
        width: 10 + '%',
        padding: 2+ '%'
    },
    table: {
        position: 'absoulte',
        width: 45 + '%',
        display: 'inline-block',
        marginRight: 3 + '%',
        marginLeft: 2 + '%',
        height: 500,
        backgroundColor: 'white'
    },
    worldLogo: {
        position: 'absolute',
        top: '-'+3 + '%',
        left: 3 + '%',
        width: 100,
        height: 50+ '%',
        maxHeight: 80
    }
});

export default function GlobalSales() {
    const classes = useStyles();
    const map = useRef();
    function createData(iconCountry, country, data, percent){
        return { iconCountry, country, data, percent};
    }

    const rows = [
        createData( 'https://www.countryflagicons.com/FLAT/32/AU.png', 'Australia', '74896', '87%'),
        createData( "https://www.countryflagicons.com/FLAT/32/US.png", 'United States of America', '74896', '87%'),
        createData( "https://www.countryflagicons.com/FLAT/32/IN.png", 'India', '74896', '87%'),
        createData( "https://www.countryflagicons.com/FLAT/32/EU.png", 'Europe', '74896', '87%')

    ]

    return(
        <Grid style = {{backgroundColor: 'white', width: 92 + '%', position: 'relative', marginTop: 2 +'%', marginLeft: 2+'%', marginBottom: 5+'%'}}>
            <Paper className={classes.worldLogo}component= {Language} style= {{}}></Paper>
                <Table className = {classes.table} aria-lable = 'simple table'>
                    <TableHead>
                        <TableRow style={{float: 'left'}}>
                                <CardContent style= {{display: 'inline-block', float: 'right'}}>
                                    <h6 style= {{textAlign: 'right', marginLeft: 50 +'%', width: 100 + '%'}}>Global Sales from Top Locations</h6></CardContent>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.country}>
                                <TableCell align = 'center'>
                                    <img src= {row.iconCountry } />
                                </TableCell>
                                <TableCell align = 'center'>
                                    {row.country}
                                </TableCell>
                                <TableCell align = 'center'>
                                    {row.data}
                                </TableCell>
                                <TableCell align = 'center'>
                                    {row.percent}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            <Paper className = {classes.paper} style = {{position: 'relative', left: 3+'%'}}>
                <VectorMap map={'world_mill'}
                       backgroundColor="#c9c9c9"
                       ref={map}
                       containerStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    markerStyle={{
                        initial: {
                          fill: "#FFFF",
                          stroke: "#741852"
                        }
                      }}
                      
                       containerClassName="map"
            />
            </Paper>
        </Grid>
    );

}
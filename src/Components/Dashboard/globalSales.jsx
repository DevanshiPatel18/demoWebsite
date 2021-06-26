import { Card,CardHeader, CardContent, Grid, Paper, Typography} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Language } from '@material-ui/icons';
import { Table, TableRow, TableCell ,TableHead, TableBody } from '@material-ui/core';
import {VectorMap} from 'react-jvectormap';
import { useRef } from 'react';

const useStyles = makeStyles({
    paper: {
        display: 'inline-block',
        width: 50+ '%',
    },
    icon: {
        width: 10 + '%',
        padding: 2+ '%'
    },
    table: {    
        width: 40+ '%',
        display: 'inline-block',
        backgroundColor: 'white',
        padding: 4+'%'
    },
    worldLogo: {
        display: 'inline-block',
        position: 'absolute',
        top: '-' + 4+'%',
        left: 3+'%',
        width: 8+'%',
        height: 18+'%',
        padding: 1+'%',
        backgroundColor: 'lightgreen'
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
        <Grid style = {{backgroundColor: 'white',width: 92 + '%', position: 'relative', marginTop: 5 +'%', marginLeft:4+'%', marginBottom: 5+'%'}}>
                <Table className = {classes.table}>
                    <TableHead style={{width: 100+'%'}}>
                                    <Card className={classes.worldLogo}component= {Language} style= {{}}></Card>
                                    <h6 style={{display: 'inline-block',widht: 100+'%', position: 'absolute', left: 14+'%', top: ''+ 4 +'%'}}>Global Sales from Top Locations</h6>
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
            <Grid className = {classes.paper} style = {{position: 'relative', left: 3+'%',
        marginLeft: 2 + '%',height: 300
        }}>
                <VectorMap className = {classes.paper} style = {{position: 'relative', left: 3+'%',border: 'none'}} map={'world_mill'}
                       backgroundColor=""
                       ref={map}
                       containerStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    regionStyle={{
                        initial: {
                          fill: "#cfcfcf",
                          strokeWidth: '2',
                          stroke: "#111111"
                        }
                      }}
                      
                       containerClassName="map"
            />
            </Grid>
        </Grid>
    );

}
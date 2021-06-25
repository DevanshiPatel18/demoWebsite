import React, { Component } from 'react';
import MediaCard from './cards';
import { blueGrey } from '@material-ui/core/colors';
import GlobalSales from './globalSales';
import Statistics from './stats';

class Dashboard extends Component {
    state = {}
    render() {
        return (
            <div style= {{backgroundColor: blueGrey[50]}}>
            <MediaCard></MediaCard>
            <GlobalSales></GlobalSales>
            <Statistics></Statistics>
            </div>
        );
    }
}
export default Dashboard;
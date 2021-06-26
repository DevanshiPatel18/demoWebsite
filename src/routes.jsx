import React from 'react';
import Charts from './Components/Charts/charts.jsx';
import Dashboard from './Components/Dashboard/dashboard.jsx';
import Calendar from './Components/Calendar/calendar';
import {Dashboard as DashboardIcon, BarChart, DateRange } from '@material-ui/icons';

const routes = [
    {
        path: '/',
        sidebarName: 'Dashboard',
        component: Dashboard,
        icon: DashboardIcon
    },
    {
        path: '/charts',
        sidebarName: 'Charts',
        component: Charts,
        icon: BarChart
    },
    {
        path: '/calendar',
        sidebarName: 'Calendar',
        component: Calendar,
        icon: DateRange
    },
];

export default routes;
import React from 'react';
import Charts from './Components/Charts/charts.jsx';
import Dashboard from './Components/Dashboard/dashboard.jsx';
import Calendar from './Components/Calendar/calendar';

const routes = [
    {
        path: '/',
        sidebarName: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/charts',
        sidebarName: 'Charts',
        component: Charts
    },
    {
        path: '/calendar',
        sidebarName: 'Calendar',
        component: Calendar
    },
];

export default routes;
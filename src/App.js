import './App.css';
import React from 'react';
import routes from './routes';
import { Switch, Route } from 'react-router-dom';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import ResponsiveDrawer from './Components/Navbar/navbar';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => 
  createStyles({
    content: {
        flexGrow: 1,
        display: 'block',
        padding: theme.spacing(3),
        position: 'relative',
        textAlign: 'left',
        marginLeft: 15 + '%',
        width: 85 + '%',
        backgroundColor: blueGrey[50]
    },
  })  
);

function App() {
  
  const classes = useStyles();

  return (
    <div className="App">
      <ResponsiveDrawer></ResponsiveDrawer>
      <Switch>
        <div className = {classes.content}>
          {routes.map((route) => (
            <Route exact path={route.path} key={route.path}>
              <route.component style = {{width: 100+'%', margin: 0}}/>
            </Route>
          ))}
          </div>
      </Switch>
    </div>
  );
}

export default App;

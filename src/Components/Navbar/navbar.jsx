import React  from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { MenuList, MenuItem, Grid } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';
import { blueGrey } from '@material-ui/core/colors';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';



const drawerWidth = 15 + '%';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        fontFamily: "Comfortaa, cursive",
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        fontFamily: "'Comfortaa', cursive",
    },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth})`,
            marginLeft: drawerWidth,
        fontFamily: "'Comfortaa', cursive",
    },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        height: 100+'vh'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        textAlign: 'left',
        fontFamily: ".Comfortaa', cursive",

    },
    background:{
        position: 'absolute',
        backgroundImage : "url('https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBtb3VudGFpbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
        width: 100+'%',
        height: 100+'vh',
        opacity: 0.5
    },
    icon: {
        marginRight: 1+'%'
    }
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const activeRoute = (routeName) => {
        return props.location.pathname === routeName ? true : false;
      }

    const drawer = (
        <div style ={{ backgroundColor: 'black', tranparency: 0.5}}>
             <div className = {classes.background}></div>
            <div className={classes.toolbar} style={{position: 'relative'}}/>
            <Divider />
            <MenuList style={{height: 91+'vh', overflow: 'hidden' }}>
            {routes.map((prop, key) => {
              return (
                <NavLink to={prop.path} style={{ textDecoration: 'none', color: 'white' }} key={key}>
                  <MenuItem selected={activeRoute(prop.path)}>
                    <Grid component= {prop.icon} style={{marginRight: 3+'%'}}></Grid>
                    <ListItemText primary={prop.sidebarName} />
                  </MenuItem>
                </NavLink>
              );
            })}
          </MenuList>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar position="" className={classes.appBar} style={{ boxShadow: 'none '}}>
                <Toolbar style={{backgroundColor: blueGrey[50], color: 'grey', overflow: 'visible'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{width: 40+'%', marginLeft: '-'+1+'%'}}>
                        <Paper style={{width: 20+'%', display: 'inline-block', marginRight: 5+'%', borderRadius: 100+'%',textAlign: 'center'}}><MoreIcon></MoreIcon></Paper>
                        {props.location.pathname === '/' ? 'DashBoard' : (props.location.pathname === '/calendar' ? 'Calendar' : 'Charts')}
                    </Typography>
                    <Grid style={{width: 60+'%', marginLeft: 70+'%',display: 'inline-block'}}>
                        <SearchIcon style={{width: 10+'%',display: 'inline'}}></SearchIcon>
                            <NotificationsIcon className= {classes.icon}></NotificationsIcon>
                            <MailIcon className= {classes.icon}></MailIcon>
                            <AccountCircle className= {classes.icon}></AccountCircle>
                    </Grid>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders" >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default withRouter(ResponsiveDrawer);

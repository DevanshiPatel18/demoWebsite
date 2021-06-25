import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FilterNone, Home, Schedule, Store } from '@material-ui/icons';
import { Grid, Paper } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
  },
  paper: {
      position: 'relative',
      width: 21 + '%',
      display: 'inline-block',
      margin: 2 + '%'
  },
  content: {
    position: 'relative',
    textAlign: 'right',
    maxHeight: 1 + '%',
    
  },
  media: {
    position: 'absolute',
    zIndex: 1,
    height: 40 + '%',
    width: 8+ '%',
    marginLeft: 3 + '%',
    color: blueGrey[50],
    padding: 1+ '%',
    borderRadius: 5 + '%',
    maxHeight: 70 + 'px'
  },
});

export default function MediaCard() {
    const classes = useStyles();
    const cardContent = [
        { 
            name: 'FilterNone',
            icon: FilterNone,
            contentTitle: 'Parts',
            contentBody: '84596',
            bottomContent: '24% Increase',
            backgroundColor: 'red'
        },{
            name: 'Home',
            icon : Home,
            contentTitle: 'Defective',
            contentBody: '889',
            bottomContent: '10% Decrease',
            backgroundColor: 'green'
        },{
            name : 'Schedule',  
            icon: Schedule,
            contentTitle: 'Performance',
            contentBody: '90',
            bottomContent: 'Good',
            backgroundColor: 'blue'
        },{
            name: 'Store',
            icon: Store,
            contentTitle: 'OEE',
            contentBody: '89',
            bottomContent: 'Good',
            backgroundColor: 'pink'
        }
    ]
  return (
    <Grid className={classes.root} >
        {cardContent.map((content) => (
            <Grid item style = {{display : 'inline'}} spacing = {2}>
                <CardHeader component = {content.icon} className = {classes.media} style = {{ backgroundColor : content.backgroundColor}}></CardHeader>
                <Paper className = {classes.paper}>
                    <Card className = {classes.content}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                <h6>{content.contentTitle}</h6>
                                <p>{content.contentBody}</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        {content.bottomContent}
                    </Button>
                </CardActions>
            </Card>
                </Paper>
       </Grid>
     ))}
    </Grid>
  );
}
/*
<CardHeader
                    className={classes.media}
                    component = {content.icon}
                />
                <Card className = {classes.content}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {content.content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        {content.bottomContent}
                    </Button>
                </CardActions>
            </Card>*/
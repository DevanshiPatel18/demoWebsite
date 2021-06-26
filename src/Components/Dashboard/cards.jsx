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
      display: 'inline',
      marginBottom: 10+'%',
      width: 100+'%'
  },
  content: {
    display: 'inline-block',
    width: 20+ '%',
    marginLeft:4+'%',
    position: 'relative',
    textAlign: 'right',
    maxHeight: 150,
    overflow: 'visible',
  },
  media: {
    position: 'absolute',
    height: 50 + '%',
    top: '-'+5+'%',
    width: 30+ '%',
    marginLeft: 5 + '%',
    color: blueGrey[50],
    padding: 4+ '%',
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
                    <Card className = {classes.content}>
                    <CardHeader component = {content.icon} className = {classes.media} style = {{ backgroundColor : content.backgroundColor}}></CardHeader>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                <h6>{content.contentTitle}</h6>
                                <p>{content.contentBody}</p>
                            </Typography>
                            
                    <Button size="small" color="primary" style={{float: 'left'}}>
                        {content.bottomContent}
                    </Button>
                        </CardContent>
            </Card>
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
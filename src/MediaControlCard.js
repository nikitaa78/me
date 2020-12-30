import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { CardActionArea } from '@material-ui/core';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: 'Helvetica Neue',
    transition: "0.3s",
    boxShadow: "0 8px 20px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    borderRadius: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(props.data.img);
  return (
    <Card className={classes.root}>
      <CardActionArea href={props.data.bigLink}>
      <div className={classes.details}>
        {/* <CardActionArea> */}
          <CardContent className={classes.content}>
            <Typography style={{fontSize: 18, fontFamily: 'Lato'}} component="h5" variant="h5">
              {props.data.title}
            </Typography>
            <Typography style={{fontSize: 18, fontFamily: 'Lato'}} variant="subtitle1" color="textSecondary">
              {props.data.position}
            </Typography>
          </CardContent>
        <div className={classes.controls}>
          <Button size="small" color="primary" href={props.data.learnLink}>
            Learn More
          </Button>
        </div>
        <div> 

        </div>
      </div>
      </CardActionArea>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CardMedia
          style={{height: "11.5em", objectFit: 'contain', margin: "auto auto", justifyContent: 'center', maxHeight: "100%", maxWidth: "100%"}}
          className={classes.cover}
          image={props.data.img}
          title="Live from space album cover"
          
        />
        </div>
      {/* </CardActionArea> */}
    </Card>
  );
}
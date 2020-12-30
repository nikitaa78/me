import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MediaControlCard from './MediaControlCard.js';
import freevimg from './img/logo-circle.png';
import sepimg from './img/SEP_logo.png';
import slackimg from './img/slack_logo.png';
import amazonimg from './img/amazon_logo.png';
import fungudesignimg from './img/udesign_logo.png';
import pursuimg from './img/pursu_logo.png';
import me from './img/me.JPG';
import PrimarySearchAppBar from './Navbar';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const data = {
    slack: {
        title: "Slack",
        position: "Software Engineer Intern",
        bigLink: "https://slack.engineering/how-to-have-an-impactful-internship-virtually/",
        learnLink: "https://slack.engineering/how-to-have-an-impactful-internship-virtually/",
        img: slackimg,
    },
    amazon: {
        title: "Amazon",
        position: "Software Engineer Intern",
        bigLink: "https://aws.amazon.com/single-sign-on/",
        learnLink: "https://aws.amazon.com/single-sign-on/",
        img: amazonimg,
    },
    freev: {
        title: "Free Ventures - UC Berkeley Startup Accelerator",
        position: "Co-Managing Director/Website",
        bigLink: "https://www.freeventures.org/",
        learnLink: "https://www.freeventures.org/",
        img: freevimg,
    },
    sep: {
        title: "Sigma Eta Pi - Entrepreneurship Fraternity",
        position: "External Vice President/Marketing + Website",
        bigLink: "http://www.ucberkeleysep.com/",
        learnLink: "http://www.ucberkeleysep.com/",
        img: sepimg,
    },
    fungudesign: {
      title: "Fung Fellowship - UDesign",
      position: "Design Challenge/Product Manager",
      img: fungudesignimg,
    },
    pursu: {
      title: "Pursu",
      position: "Frontend Engineer",
      bigLink: "https://pursu.dev/",
      learnLink: "https://pursu.dev/",
      img: pursuimg,
    }
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    // fontFamily: 'Helvetica Neue',
  },
  image: {
    //backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#ffdbdc',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
      margin: theme.spacing(2),
      marginBottom: theme.spacing(3),
      marginRight: 'auto',
      fontSize: 12,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  avatarImg: {
      margin: theme.spacing(5),
      height: theme.spacing(20),
      width: theme.spacing(20),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
      width: theme.spacing(20),
  },
  gridCard: {
      paddingLeft: theme.spacing(5),
      marginBottom: theme.spacing(3),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={6} sm={6} md={4} className={classes.image}>
        <PrimarySearchAppBar/>
        <div className={classes.paper}>
            <Avatar className={classes.avatarImg} alt="Nikita Ashok" src={me} />
            <Typography style={{fontFamily: 'Lato'}} component="h1" variant="h5">
                Hi, I'm
            </Typography>
            <Typography style={{fontFamily: 'Lato'}} component="h1" variant="h3">
                Nikita
            </Typography>
            <p>...a soon to be graduate of UC Berkeley</p>
            <p>here's some of the cool opportunities I was apart of in college</p>
        </div>
      
      </Grid>
      <Grid item xs={6} sm={6} md={8} component={Paper} elevation={6} square>

        <div className={classes.paper}>
            <div style={{scrollBehavior: 'smooth'}} id="work" className={classes.typography}>            
                <Typography style={{fontFamily: 'Lato'}} component="body1" variant="h5" align="left">
                    Work Experience
                </Typography>
            </div>
            <Grid className={classes.gridCard} container spacing={4}>
                <Grid item xs={6}> 
                    <MediaControlCard data={data.slack}/> 
                </Grid>
                <Grid item xs={6}>
                    <MediaControlCard data={data.amazon}/>
                </Grid>
            </Grid>

            <div style={{scrollBehavior: 'smooth'}} id="projects" className={classes.typography}>            
                <Typography style={{fontFamily: 'Lato'}} style={{fontSize: 25}} component="body1" variant="h5" align="left">
                    Projects
                </Typography>
            </div>
            <Grid className={classes.gridCard} container spacing={4}>
                <Grid item xs={6}> 
                    <MediaControlCard data={data.freev}/> 
                </Grid>
                <Grid item xs={6}>
                    <MediaControlCard data={data.pursu}/>
                </Grid>
                <Grid item xs={6}> 
                    <MediaControlCard data={data.sep}/> 
                </Grid>
                <Grid item xs={6}>
                    <MediaControlCard data={data.fungudesign}/>
                </Grid>
            </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
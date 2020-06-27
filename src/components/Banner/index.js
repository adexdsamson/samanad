import React from "react";
import { makeStyles, Grid, Typography, Box, Button } from "@material-ui/core";
import Navbar from "./navbar";
import IMG from "../../assets/wall.jpg";
import ReactTypingEffect from "react-typing-effect";

const useStyles = makeStyles((theme) => ({
  Intro: {
    position: "relative",
    background: `url(${IMG})`,
    width: "100%",
    height: 783,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "center top",
    overflow: "hidden",
    [theme.breakpoints.down('md')]: {
      height: 600
    },
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: 783,
    position: "absolute",
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      height: 600
    },
  },
  content: {
    height: 783,
    zIndex: 2,
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      height: 600
    },
  },
  subContent: {
    textAlign: 'center'
  },
  text1: {
    color: 'white',
    [theme.breakpoints.down('md')]:{
      fontSize: '2em'
    }
  },
  text2: {
    color: '#7ABF7A',
    fontSize: '4em',
    [theme.breakpoints.down('md')]:{
      fontSize: '3em'
    }
  },
  button: {
    borderRadius: 15,
    background: '#7ABF7A',
    color: 'white',
    '&:hover':{
      color: 'black'
    }
  }
}));

function Banner({ navItems, src }) {
  const classes = useStyles();
  const message = [
    "Homes",
    "Hospitals/Health Centers",
    "Schools/Training Centers",
    "Church",
    "Government Ministries",
    "Corporate Offices",
    "Telecommunication or IT Firms",
    "Recreational Centers",
    "Hotels",
    "Villages/Agricultural settlements"
  ]
  return (
    <header className={classes.Intro}>
      <div className={classes.overlay}></div>
      <Navbar navItems={navItems} src={src} />
      <Grid 
        container 
        direction="column" 
        justify="center" 
        alignItems="center"

        className={classes.content}
      >
        <Grid className={classes.subContent} item >
          <Typography className={classes.text1} variant='h2'>
            We provide clean and reliable power for
          </Typography>
          <ReactTypingEffect
            className={classes.text2}
            text={message}
          />
          <Box paddingTop={10}>
            <Button onClick={() => window.location.href='#contact'} className={classes.button} variant='contained'>
              Request a quote
            </Button>
          </Box>
        </Grid>
      </Grid>
    </header>
  );
}

export default Banner;

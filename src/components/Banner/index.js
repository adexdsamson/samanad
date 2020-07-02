import React from "react";
import { makeStyles, Typography, Box, Button, Grid } from "@material-ui/core";
import Navbar from "./navbar";
import Typing from 'react-typing-effect';

const useStyles = makeStyles((theme) => ({
  Intro: {
    position: "relative",
    background: `url(https://res.cloudinary.com/dymahyzab/image/upload/v1593293345/solar_banner.png)`,
    width: "100%",
    height: 685,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: 600,
    },
  },
  overlay: {
    background: "#000 none repeat scroll 0 0",
    content: "",
    height: "100%",
    left: 0,
    opacity: 0.7,
    position: "absolute",
    top: 0,
    width: "100%",
  },
  content: {
    height: "70vh",
    zIndex: 2,
    position: "absolute",
     textAlign: "center",
  },
  text1: {
    color: 'white',
    fontWeight: 300,
    fontFamily: "'Roboto Mono', monospace",
    [theme.breakpoints.down('md')]:{
      fontSize: '1.5em',
      marginBottom: 15,
    }
  },
  text2: {
    color: '#7ABF7A',
    fontSize: '5em',
    fontFamily: "'Roboto Mono', monospace",
    [theme.breakpoints.down('md')]:{
      fontSize: '2em',
      marginTop: 12
    }
  },
  button_box: {
    marginTop: '5rem',
    [theme.breakpoints.down("md")]: {
      marginTop: '2rem'
    }
  },
  button: {
    borderRadius: 15,
    background: "#7ABF7A",
    color: "white",
    fontFamily: "'Roboto Mono', monospace",
    "&:hover": {
      color: "black",
    },
  },
}));

function Banner({ navItems, src }) {
  const classes = useStyles();
  const message = [
    "Homes",
    "Hospitals / Health Centers",
    "Schools / Training Centers",
    "Church",
    "Government Ministries",
    "Corporate Offices",
    "Telecommunication / IT Firms",
    "Recreational Centers",
    "Hotels",
    "Villages / Agricultural settlements"
  ]
  return (
    <header className={classes.Intro}>
      <div className={classes.overlay}></div>
      <Navbar navItems={navItems} src={src} />
      <Grid container direction='column' justify='center' alignItems='center' className={classes.content}>
        <Grid item >
          <Typography className={classes.text1} variant='h4'>
            We provide clean and reliable power for
          </Typography>
          <Typing
            className={classes.text2}
            text={message}
          />
          <Box className={classes.button_box}>
            <Button
              onClick={() => (window.location.href = "#contact")}
              className={classes.button}
              variant="contained"
              size='large'
            >
              Request a quote
            </Button>
          </Box>
        </Grid>
      </Grid>
    </header>
  );
}

export default Banner;

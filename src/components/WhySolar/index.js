import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Container,
  Box,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  section: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
  title: {
    paddingBottom: 12,
    marginBottom: "4rem",
    borderBottom: "1px solid #7ABF7A",
    textTransform: "uppercase",
    fontFamily: "'Roboto Mono', monospace",
  },
  body: {
    marginTop: "5rem",
  },
  box: {
    marginBottom: "4rem",
  },
  card: {
    borderRadius: 15,
    textAlign: "center",
    height: "15rem",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    marginLeft: "1rem",
    marginTop: "1rem",
    flexDirection: "column",
    "&:hover": {
      boxShadow: "22px 15px 28px -20px rgba(0,0,0,0.79)",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      padding: 15,
    },
  },
  boxIcon: {
    backgroundColor: "#7ABF7A",
    padding: 15,
    borderRadius: "50%",
    marginBottom: 35,
    marginTop: 15,
  },
  listTitle: {
    fontWeight: 700,
    color: '#7ABF7A',
    fontFamily: "'Roboto Mono', monospace",
    [theme.breakpoints.up('lg')]: {
      marginTop: '5rem',
    },
    [theme.breakpoints.down('md')]:{
      fontSize: '2rem'
    }
  },
  listBody: {
    marginTop: '1rem',
    marginRight: 15,
    fontFamily: "'Roboto Mono', monospace",
    [theme.breakpoints.down('md')]:{
      fontSize: '1em',
      marginRight: 0
    }
  }
}));

const WhySolar = ({ title, point }) => {
  const classes = useStyles();
  const card = point.map((item) => (
    <Grid data-aos='fade-down' key={item.id} item sm={6} md={6} lg={6}>
      <Typography className={classes.listTitle} variant='h4'> {item.title} </Typography>
      <Typography className={classes.listBody} variant='body1'>
        {item.body}
      </Typography>
    </Grid>
  ));
  return (
    <div id='whySolar' className={classes.div}>
      <Container className={classes.section}>
        <Box className={classes.box}>
          <Typography
            className={classes.title}
            variant="subtitle1"
            display="inline"
            data-aos='fade-down'
          >
            {title}
          </Typography>
        </Box>
        <Grid spacing={4} container direction="row" justify="space-between">
          {card}
        </Grid>
      </Container>
    </div>
  );
};

WhySolar.propTypes = {
  title: PropTypes.string.isRequired,
  point: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.element,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  ),
};

export default WhySolar;

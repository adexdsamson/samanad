import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Grid, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: '5rem',
    paddingBottom: '5rem'
  },
  sectionTitle: {
    paddingBottom: 12,
    marginBottom: '4rem',
    borderBottom: '1px solid #006400',
    textTransform: 'uppercase',
    fontFamily: "'Roboto Mono', monospace",
  },
  title: {
    marginBottom: 12
  },
  img: {
    maxWidth: '100%',
    borderRadius: 15,
    [theme.breakpoints.down('md')]:{
      marginTop: 15
    }
  },
  body: {
    fontFamily: "'Roboto Mono', monospace",
  }
}));

const About = ({ sectionTitle, src, body }) => {
  const classes = useStyles();
  return (
    <Container id='about' className={classes.section}>
      <Typography data-aos='fade-down' display='inline' className={classes.sectionTitle} variant="subtitle1">
        {sectionTitle}
      </Typography>
      <Grid spacing={5} style={{marginTop: '2rem'}} container direction="row" alignItems='center'>
        <Grid item md={6}>
          <Container>
            <Typography data-aos='fade-down'className={classes.body} variant="body1">
              {" "}
              {body}{" "}
            </Typography>
          </Container>
        </Grid>
        <Grid data-aos='fade-down' item md={6}>
          <img className={classes.img} src={src} alt="Who we are" />
        </Grid>
      </Grid>
    </Container>
  );
};

About.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default About;

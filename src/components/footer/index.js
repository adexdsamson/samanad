import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container, Grid, Avatar, IconButton, Typography } from '@material-ui/core';
   
const useStyles = makeStyles(theme => ({
  div: {
    backgroundColor: 'black'
  },
  section: {
    paddingTop: '5rem',
    paddingBottom: '5rem',
  },
  title: {
    marginBottom: '1rem',
    color: 'white',
    textTransform: 'capitalize',
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: 700,
  },
  body: {
    color: 'white', 
    marginTop: 13, 
    marginBottom: 13,
    fontFamily: "'Roboto Mono', monospace",
  },
  text: {
    color: 'white',
    marginTop: 15,
    paddingBottom: 12,
    fontFamily: "'Roboto Mono', monospace",
  },
  foot: {
    color: 'white',
    display: 'inline',
    textDecoration: 'none'
  },
  cont: {
    textAlign: 'center',
    paddingBottom: 15,
  }
}));
  
const Footer = ({ src, media, phone, name, click, email, body }) => {
  const classes = useStyles();
  let social = media.map(item => (
    <IconButton onClick={() => click(item.link)} key={item.id}>
      {item.icon}
    </IconButton>
  ));
  return (
    <div className={classes.div}>
      <Container className={classes.section}>
        <Grid data-aos='fade-down' spacing={5} container direction='row'>
          <Grid item md={6}>
            <Avatar src={src} sizes='medium' />
            <Typography className={classes.title} variant='h5'>
              {name}
            </Typography>
            <Typography className={classes.body} variant='subtitle2'>
              {body}
            </Typography>
            {social}
          </Grid>
          <Grid data-aos='fade-down' item md={6}>
            <Typography className={classes.title} variant='h5' display='inline'>
              Reach Us
            </Typography>
            <Typography className={classes.text}>
              Mobile: {phone}
            </Typography>
            <Typography className={classes.text}>
              Email: {email}
            </Typography>
            <address>
              <Typography className={classes.text}>
                3, Alaka junction elebu oluyole
                extension Ibadan,
                Oyo Nigeria.
              </Typography>
            </address>
          </Grid>
        </Grid>
      </Container>
      <Container  className={classes.cont}>
        <Typography className={classes.text} display='inline'>
          @{ new Date().getFullYear()} Samanad Company. All Rights Reserved. Design By 
        </Typography>
        <a href='https://deola-adediran.firebaseapp.com' className={classes.foot}> Deola Adediran </a>
      </Container>
    </div>
  );
};

Footer.propTypes = {
  src: PropTypes.string,
  phone: PropTypes.string,
  click: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  media: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.element,
    link: PropTypes.string.isRequired
  }))
}

export default Footer;
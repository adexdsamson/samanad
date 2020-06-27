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
    paddingBottom: 12,
    marginBottom: '4rem',
    color: 'white',
    borderBottom: '1px solid white',
    textTransform: 'uppercase',
  },
  text: {
    color: 'white',
    marginTop: 15,
    pmarginBottom: 15
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
        <Grid spacing={5} container direction='row'>
          <Grid item md={6}>
            <Avatar src={src} sizes='medium' />
            <Typography className={classes.text} variant='h5'>
              {name}
            </Typography>
            <Typography style={{color: 'white', marginTop: 13, marginBottom: 13}} variant='subtitle2'>
              {body}
            </Typography>
            {social}
          </Grid>
          <Grid item md={6}>
            <Typography className={classes.title} variant='subtitle1' display='inline'>
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
      <Container className={classes.cont}>
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
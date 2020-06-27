import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container, Box, Typography, Grid } from '@material-ui/core';
   
const useStyles = makeStyles(theme => ({
  div: {
    backgroundColor: '#7ABF7A'
  },
  section: {
    paddingTop: '5rem',
    paddingBottom: '5rem',
    
  },
  title: {
    paddingBottom: 12,
    marginBottom: '4rem',
    borderBottom: '1px solid white',
    textTransform: 'uppercase',
  },
  body: {
    marginTop: '5rem'
  },
  box: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  card: {
    borderRadius: 15,
    textAlign: 'center',
    height: '15rem',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1rem',
    marginTop: '1rem',
    flexDirection: 'column',
    '&:hover':{
      boxShadow: "22px 15px 28px -20px rgba(0,0,0,0.79)"
    },
    [theme.breakpoints.down('sm')]:{
      marginLeft: 0,
      padding: 15
    }
  },
  boxIcon: {
    backgroundColor: '#7ABF7A',
    padding: 15,
    borderRadius: '50%',
    marginBottom: 35,
    marginTop: 15,
  }
}));
  
const Service = ({ title, body, point }) => {
  const classes = useStyles();
  const card = point.map(item => (
    <Grid key={item.id} item md={3} sm={5} lg={5} className={classes.card}>
      <div className={classes.boxIcon}>
          {item.icon}
        </div>
      <Container>
        
        <Typography variant='h5'>
          {item.name}
        </Typography>
        <Typography className={classes.body} variant='body1'>
          {body}
        </Typography>
      </Container>
    </Grid>
  ))
  return (
    <div id='service' className={classes.div}>
      <Container className={classes.section}>
        <Box className={classes.box}>
          <Typography className={classes.title} variant='subtitle1' display='inline'>
            {title}
          </Typography>
          <Typography className={classes.body} variant='body1'>
            {body}
          </Typography>
        </Box>
        <Grid container direction='row' justify='space-between'>
          {card}
        </Grid>
      </Container>
    </div>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  point: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }))
}

export default Service 
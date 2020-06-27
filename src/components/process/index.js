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
    marginTop: '1rem'
  },
  box: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  card: {
    borderRadius: 15,
    textAlign: 'center',
    height: '15.5rem',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem',
    '&:hover':{
      boxShadow: "22px 15px 28px -20px rgba(0,0,0,0.79)"
    },
    [theme.breakpoints.down('md')]:{
      marginLeft: 0,
      padding: 15
    }
  },
  boxIcon: {
    backgroundColor: '#7ABF7A',
    padding: 15,
    borderRadius: '50%',
    marginBottom: 15,
    marginTop: 15,
  }
}));
  
const Process = ({ title, body, point }) => {
  const classes = useStyles();
  const card = point.map(item => (
    <Grid key={item.id} item md={5} sm={5} lg={2} className={classes.card}>
      <Box className={classes.boxIcon}>
        {item.icon}
      </Box>
      <Typography variant='h5'>
        {item.name}
      </Typography>
      <Typography className={classes.body} variant='body1'>
        {item.body}
      </Typography>
    </Grid>
  ))
  return (
    <div className={classes.div}>
      <Container className={classes.section}>
        <Box className={classes.box}>
          <Typography className={classes.title} variant='subtitle1' display='inline'>
            {title}
          </Typography>
          <Typography className={classes.body} variant='body1'>
            {body}
          </Typography>
        </Box>
        <Grid spacing={2} container direction='row' justify='space-between'>
          {card}
        </Grid>
      </Container>
    </div>
  );
};

Process.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  point: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }))
}

export default Process; 
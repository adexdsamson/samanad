import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container, Box, Typography, Grid, Card, CardContent, CardMedia } from '@material-ui/core';
   
const useStyles = makeStyles(theme => ({
  div: {
    backgroundColor: '#2E4D2E'
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
    fontFamily: "'Roboto Mono', monospace",
  },
  body: {
    marginTop: '5rem'
  },
  box: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  card: {
    textAlign: 'center',
    marginTop: '4rem',
    maxWidth: '18rem',
    width: '18rem',
    [theme.breakpoints.down('sm')]:{
      marginLeft: 0,
      marginTop: 12
    }
  },
  card_media: {
    height: '12rem',
    backgroundSize: 'contain'
  },
  boxIcon: {
    backgroundColor: '#7ABF7A',
    padding: 15,
    borderRadius: '50%',
    marginBottom: 35,
    marginTop: 15,
  },
  card_container: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]:{
      justifyContent: 'center'
    }
  },
  caption: {
    fontWeight: 'bold'
  }
}));
  
const Service = ({ title, body, point }) => {
  const classes = useStyles();
  const card = point.map(item => (
    <Card key={item.id} className={classes.card}>
      <CardMedia className={classes.card_media} title='small' image={item.src} />
      <CardContent>
        <Typography className={classes.caption} variant='body2' component='p'>
          {item.name}
        </Typography>
      </CardContent>
    </Card>
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
        <Grid container direction='row' alignItems='center' justify='space-between' className={classes.card_container}>
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
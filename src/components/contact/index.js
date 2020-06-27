import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container, Typography } from '@material-ui/core';
import Form from './form';
   
const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: '5rem',
    paddingBottom: '5rem'
  },
  title: {
    paddingBottom: 12,
    marginBottom: '4rem',
    borderBottom: '1px solid #006400',
    textTransform: 'uppercase',
  },
}));
  
const Contact = ({onSubmit, title, change }) => {
  const classes = useStyles();
  return (
    <Container id='contact' className={classes.section}>
      <Typography className={classes.title} variant='subtitle1'  display='inline'>
        {title}
      </Typography>
      <Form handleFormSubmit={onSubmit} handleChange={change} />
    </Container>
  );
};

Contact.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string.isRequired,
  change: PropTypes.func
}

export default Contact;
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Grid, TextField, Container, Button } from '@material-ui/core';
   
const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '5rem'
  },
  gridContainer: {
    [theme.breakpoints.down('md')]:{
      display: 'block'
    }
  },
  form: {
    marginTop: 20,
    fontFamily: "'Roboto Mono', monospace",
    '&:hover':{
      borderColor: '#7ABF7A',
    }
  },
  button: {
    borderRadius: 15,
    background: '#7ABF7A',
    width: 200,
    color: 'white',
    '&:hover':{
      color: 'black'
    }
  },
  Grid: {
    paddingRight: 15,
    [theme.breakpoints.down('md')]:{
      paddingRight: 0
    }
  },
  Grid1: {
    paddingLeft: 15,
    [theme.breakpoints.down('md')]:{
      paddingLeft: 0
    }
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    }
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'green !important'
  },
}));
  
const Form = ({ handleFormSubmit, handleChange }) => {
  const classes = useStyles();
  return (
    <form className={classes.container} onSubmit={handleFormSubmit}>
      <Grid className={classes.gridContainer} container direction='row'>
        <Grid className={classes.Grid} item lg={6} md={12} sm={12}>
          <TextField 
            name='firstName'
            placeholder='First Name'
            onChange={handleChange}
            className={classes.form}
            fullWidth
            variant='outlined'
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              
            }}
          />
        </Grid>
        <Grid className={classes.Grid1} item lg={6} md={12} sm={12}>
          <TextField 
            name='lastName'
            placeholder='Last Name'
            onChange={handleChange}
            className={classes.form}
            fullWidth
            variant='outlined'
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              
            }}
          />
        </Grid>
      </Grid>
        <TextField 
          name='email'
          placeholder='Email'
          onChange={handleChange}
          className={classes.form}
          fullWidth
          variant='outlined'
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            
          }}
        />

        <TextField 
          name='subject'
          placeholder='Subject'
          onChange={handleChange}
          className={classes.form}
          fullWidth
          variant='outlined'
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            
          }}
        />

        <TextField 
          name='body'
          placeholder='Message'
          onChange={handleChange}
          className={classes.form}
          fullWidth
          multiline
          rows={20}
          variant='outlined'
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            
          }}
        />

      <Container style={{ paddingTop: 15}}>
        <Button className={classes.button} type='submit'>
          Send
        </Button>
      </Container>
    </form>
  );
};

Form.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired
}

export default Form 
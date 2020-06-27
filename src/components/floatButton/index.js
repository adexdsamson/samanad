import React from 'react';
import { makeStyles, Fab } from '@material-ui/core';
import { WhatsApp } from '@material-ui/icons';
   
const useStyles = makeStyles(theme => ({
  button: {
    bottom: '20px',
    right: '20px',
    position: 'fixed',
    background: '#7ABF7A',
    color: '#fff',
    '&:hover':{
      color: 'black'
    }
  }
}));
  
const FloatWhatsapp = ({ click }) => {
  const classes = useStyles();
  return (
    <Fab className={classes.button} onClick={click}>
      <WhatsApp />
    </Fab>
  );
};

export default FloatWhatsapp 
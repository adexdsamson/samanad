import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Avatar} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  nav: {
    display: 'flex',
    width: '100vw',
    overflow: 'hidden',
    alignItems: 'center',
    height: '3rem',
    position: 'absolute',
    zIndex: 21,
    justifyContent: 'space-between'
  },
  brand: {
    display: 'inline-flex',
    alignItems: 'center',
    color: 'white',
    marginLeft: 15,
    marginTop: 15,
    justifyContent: 'space-between'
  },
  content: {
    marginTop: '10px',
    marginRight: '2rem',
    [theme.breakpoints.down('md')]:{
      display: 'none'
    }
  },
  ul: {
    display: 'inline',
    marginTop: 15,
  },
  a: {
    textDecoration: 'none'
  },
  li: {
    display: 'inline',
    margin: 0,
    listStyle: 'none',
    color: 'white',
    textTransform: 'uppercase',
    "&:active":{
      borderBottom: '1px solid #00FF00'
    },
    '&:hover':{
      paddingBottom: 12,
      borderBottom: '1px solid #00FF00'
    }
  },
  icon: {
    display: 'none',
    [theme.breakpoints.down('md')]:{
      display: 'block'
    }
  }
}))

function Navbar({ navItems, src }) {
  const classes = useStyles()
  let Item = navItems.map(item => (
    <ul key={item.id} className={classes.ul}> 
      <a className={classes.a} href={ item.link }>
        <li className={classes.li}> { item.name } </li>
      </a>
    </ul>
  ))
  return (
    <nav className={classes.nav}>
      <div className={classes.brand}>
        <Avatar src={src} />
        <Typography style={{marginLeft: 10}} variant='h6'>
          Samanad
        </Typography>
      </div>
      <div className={classes.content}>
        { Item }
      </div>
      
    </nav>
  )
}

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType(["number", "string"]),
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })),
  src: PropTypes.string.isRequired
};

export default Navbar;

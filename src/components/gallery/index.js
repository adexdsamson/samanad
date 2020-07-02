import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Container, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
  title: {
    paddingBottom: 12,
    marginBottom: "4rem",
    borderBottom: "1px solid #006400",
    textTransform: "uppercase",
    float: "left",
    fontFamily: "'Roboto Mono', monospace",
  },
  card: {
    border: "1px solid #7ABF7A",
    padding: 15,
    borderRadius: 15,
    height: '15rem',
    width: '100%',
    
  },
  img: {
    maxWidth: "100%",
    objectFit: 'cover',
    height: '13rem',
    width: '100%'
  },
}));

const Gallery = ({ title, previous, onImg }) => {
  const classes = useStyles();
  
  let work = previous.map((item) => (
    <Grid className={classes.card} item key={item.id} sm={4}>
      <img
        className={classes.img}
        onClick={() => onImg(item.src)}
        src={item.src}
        alt="previous work"
      />
    </Grid>
  ));
  return (
    <Container id='gallery' className={classes.section}>
      <Typography
        className={classes.title}
        variant="subtitle1"
        display="inline"
      >
        {title}
      </Typography>
      <Grid container direction="row">
        {work}
      </Grid>
    </Container>
  );
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  previous: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
};

export default Gallery;

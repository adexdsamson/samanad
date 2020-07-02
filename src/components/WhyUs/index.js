import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
  title: {
    paddingBottom: 12,
    marginBottom: "4rem",
    borderBottom: "1px solid #006400",
    fontFamily: "'Roboto Mono', monospace",
    textTransform: "uppercase",
    float: "left",
  },
  img: {
    maxWidth: "100%",
    borderRadius: 15,
  },
  grid: {
    flexGrow: 1,
    textAlign: 'center'
  },
  list: {
    fontFamily: "'Roboto Mono', monospace !important"
  }
}));

const WhyUs = ({ title, src, point }) => {
  const classes = useStyles();
  const list = point.map((item) => (
    <ListItem key={item.id}>
      <ListItemAvatar>{item.icon}</ListItemAvatar>
      <ListItemText classes={{
        root: classes.list,
        primary: classes.list,
        secondary: classes.list
      }} primary={item.title} secondary={item.body} />
    </ListItem>
  ));
  return (
    <Container className={classes.section}>
      <Typography
        className={classes.title}
        display="inline"
        variant="subtitle1"
      >
        {title}
      </Typography>
      <Grid spacing={5} container direction="row" alignItems="center">
        <Grid className={classes.grid} item md={6}>
          <img src={src} alt="why us" className={classes.img} />
        </Grid>
        <Grid item md={6}>
          <List className={classes.list}>{list}</List>
        </Grid>
      </Grid>
    </Container>
  );
};

WhyUs.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  point: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      icon: PropTypes.element,
    })
  ),
};

export default WhyUs;

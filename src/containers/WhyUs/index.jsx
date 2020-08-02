import React, { Component } from "react";
import Reason from "../../components/WhyUs";
import { DoneOutline, Language, DoubleArrow } from '@material-ui/icons';

class WhyUs extends Component {
  state = {
    title: "Why choose Samanad",
    img: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293326/whyus.png',
    point: [
      {
        id: 1,
        icon: <DoneOutline />,
        title: 'Tested, Trusted & Lasting',
        body: 'We setup products that are trusted, tested and much lasting. Our noble activities is infused well into our business, community engagement and interaction with clients.'
      },
      {
        id: 2,
        icon: <Language />,
        title: 'Professionalism',
        body: 'Our engineers are well trained with over 10 years of experience in solar industry. Each enigeer is dedicated on a long term success of samanad company through the use of brilliance business practices, sustainability, quality and technical skill building.'
      },
      {
        id: 3,
        icon: <DoubleArrow />,
        title: 'Safety First',
        body: 'Safety is not just a word but a practice taken during and after installation. Safety and precaution are work ethics practiced by our engineers on site.'
      },
    ],
  };
  render() {
    let {
      state: { title, img, point },
    } = this;
    return <Reason title={title} src={img} point={point} />;
  }
}

export default WhyUs;

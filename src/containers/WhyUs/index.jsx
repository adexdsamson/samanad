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
        title: 'Tested & Trusted',
        body: 'We deploy only tested and trusted products. We exhibit the highest level of integrity in how we do business, operate in our communities and interact with our clients. We strive for honesty in our communications and in our interactions with clients.'
      },
      {
        id: 2,
        icon: <Language />,
        title: 'Professionalism',
        body: 'Our Engineers are highly trained with over 10 years of experience. We are dedicated to the long term success of our company through the use of excellence business practices and focusing on sustainablility, profit, productivity, quality and technical skill building.'
      },
      {
        id: 3,
        icon: <DoubleArrow />,
        title: 'Safety First',
        body: 'We pride ourselves in following safety precautions during and after installation. Our Engineers are trained in safe work practices and design all of our systems with product and personnel safety at the forefront.'
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

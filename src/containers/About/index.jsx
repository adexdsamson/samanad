import React, { Component } from "react";
import Abouts from "../../components/about";


class About extends Component {
  state = {
    sectionTitle: "who are we",
    title: "About Samanad Energy",
    img: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593296139/about.jpg',
    body: "Samanad Company is a Nigerian based company focus on clean renewable energy, affordable and uninterrupted smart energy solutions. Our vision is to lead energy company by providing top notch service and front line clean energy execllence. ",
  };
  render() {
    let {
      state: { sectionTitle, title, body, img },
    } = this;
    return <Abouts sectionTitle={sectionTitle} title={title} body={body} src={img} />;
  }
}

export default About;

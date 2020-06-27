import React, { Component } from "react";
import Abouts from "../../components/about";
import Img from '../../assets/about.jpg';

class About extends Component {
  state = {
    sectionTitle: "who are we",
    title: "About Samanad Energy",
    img: Img,
    body: "Samanad Company is a Nigerian company specialized in clean renewable energy, affordable and uninterrupted smart energy solutions. Our vision is to always be the best energy company by providing top notch service and spearheading renewable clean energy execllence. ",
  };
  render() {
    let {
      state: { sectionTitle, title, body, img },
    } = this;
    return <Abouts sectionTitle={sectionTitle} title={title} body={body} src={img} />;
  }
}

export default About;

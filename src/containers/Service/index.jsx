import React, { Component } from "react";
import Services from "../../components/service";



class Service extends Component {
  state = {
    title:"Our Service",
    body: "We are expert in the following ",
    point: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593281263/IMG-20200616-WA0001.jpg',
        name: 'Enjoy the limitless power of solar power anywhere.'
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593281264/IMG-20200616-WA0002.jpg',
        name: 'Back-up/Inverter system installation & maintenance'
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593281264/IMG-20200616-WA0004.jpg',
        name: 'Electrical Installations and Energy consultancy.'
      },
      {
        id: 4,
        src: "https://res.cloudinary.com/dymahyzab/image/upload/v1593281263/IMG-20200616-WA0003.jpg",
        name: 'Sales of quality  Electrical and solar accessories.'
      },
    ]
  };
  render() {
    let {
      state: { title,  point },
    } = this;
    return <Services title={title}  point={point} />;
  }
}

export default Service;

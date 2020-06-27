import React, { Component } from "react";
import Services from "../../components/process";
import {  LinearScale } from '@material-ui/icons';


class Process extends Component {
  state = {
    title:"How it works",
    point: [
      {
        id: 1,
        icon: <LinearScale style={{color: 'white'}} />,
        name: 'Contact Us',
        body: 'To get started call contact center on +2348154088459'
      },
      {
        id: 2,
        icon: <LinearScale style={{color: 'white'}}  />,
        name: 'Energy Assesment',
        body: 'Tell us what you need to power and we will give the best system size'
      },
      {
        id: 3,
        icon: <LinearScale style={{color: 'white'}}  />,
        name: 'Contract and Payment',
        body: 'Sign a contract, pay specfic deposit or installation fee'
      },
      {
        id: 4,
        icon: <LinearScale style={{color: 'white'}}  />,
        name: 'Installation',
        body: 'We install your Solar system and you begin 24-hours power'
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

export default Process;

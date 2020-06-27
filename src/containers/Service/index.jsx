import React, { Component } from "react";
import Services from "../../components/service";
import { Add } from '@material-ui/icons';



class Service extends Component {
  state = {
    title:"Our Service",
    body: "We are expert in the following ",
    point: [
      {
        id: 1,
        icon: <Add style={{color: 'white'}} />,
        name: 'Back-up/Inverter system installation & maintenance'
      },
      {
        id: 2,
        icon: <Add style={{color: 'white'}} />,
        name: 'Solar energy system installation & maintenance'
      },
      {
        id: 3,
        icon: <Add style={{color: 'white'}} />,
        name: 'Electrical Installations and Energy consultancy.'
      },
      {
        id: 4,
        icon: <Add style={{color: 'white'}} />,
        name: 'Sales of Electrical and solar accessories'
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

import React, { Component } from "react";
import Services from "../../components/WhySolar";
import { Add } from '@material-ui/icons';

class Service extends Component {
  state = {
    title:"Why Solar",
    point: [
      {
        id: 1,
        icon: <Add />,
        title: 'Eco-Friendly',
        body: 'Solar is environment friendly, as a result there is a reduction in emission of C02, removing toxic exhaust fumes and noice pollution from generator set.'
      },
      {
        id: 2,
        icon: <Add />,
        title: 'Uninterrupted Power Supply',
        body: 'Solar provide access to uninterrupted power supply, it\'s that simple. Get ready to enjoy peace of mind, well-being and productivity.'
      },
      {
        id: 3,
        icon: <Add />,
        title: 'Electricity Bill Reduction',
        body: 'With solar, you will cut your cost of electricity at home or office and save money on the long run. A solar home system generate free power for at least 25 years.'
      },
      {
        id: 4,
        icon: <Add />,
        title: 'Free & Unlimited Energy Source',
        body: 'Solar energy serves as an important source of renewable energy. Solar energy conversion into usable electricity is one of the most extra-ordinary of all technology.'
      },
    ]
  };
  render() {
    let {
      state: { title,  point },
    } = this;
    return <Services title={title} point={point} />;
  }
}

export default Service;

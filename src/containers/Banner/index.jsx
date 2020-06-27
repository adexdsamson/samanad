import React, { Component } from 'react';
import Header from '../../components/Banner';
import Img from '../../assets/icon.png'

class Banner extends Component {
  state = { 
    img: Img,
    Nav: [
      {
        id: 1,
        name: 'Home',
        link: '/'
      },
      {
        id: 2,
        name: 'about',
        link: '#about'
      },
      {
        id: 3,
        name: 'service',
        link: '#service'
      },
      {
        id: 4,
        name: 'why solar',
        link: '#whySolar'
      },
      {
        id: 5,
        name: 'gallery',
        link: '#gallery'
      },
      {
        id: 6,
        name: 'contact',
        link: '#contact'
      }
    ],
  }
  render() {
    let {
      state: { Nav, img }
    } = this;
    return ( 
      <Header navItems={Nav} src={img} />
    );
  }
}

export default Banner;
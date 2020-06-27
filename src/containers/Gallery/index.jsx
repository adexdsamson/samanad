import React, { Component, Fragment } from "react";
import { Modal } from '@material-ui/core';
import Work from "../../components/gallery";
import Img from '../../assets/samanad1.jpeg';
import Img2 from '../../assets/samanad2.jpeg';
import Img3 from '../../assets/samanad3.jpeg';
import Img4 from '../../assets/samanad4.jpeg';
import Img5 from '../../assets/samanad5.jpeg';
import Img6 from '../../assets/samanad6.jpeg';
import Img7 from '../../assets/samanad7.jpeg';
import Img8 from '../../assets/samanad8.jpeg';
import Img9 from '../../assets/samanad9.jpeg';
import Img0 from '../../assets/samanad0.jpeg';
import Img11 from '../../assets/samanad11.jpeg';
import Img12 from '../../assets/samanad12.jpeg';

const style = {
  margin: 'auto',
  display: 'block',
  width: '80%',
  maxWidth: 700
}

class WhyUs extends Component {
  state = {
    title: "Previous work",
    work: [
      {
        id: 1,
        src: Img
      },
      {
        id: 2,
        src: Img2
      },
      {
        id: 3,
        src: Img3
      },
      {
        id: 4,
        src: Img4
      },
      {
        id: 5,
        src: Img5
      },
      {
        id: 6,
        src: Img6
      },
      {
        id:7,
        src: Img7
      },
      {
        id: 8,
        src: Img8
      },
      {
        id: 9,
        src: Img9
      },
      {
        id: 10,
        src: Img0
      },
      {
        id: 11,
        src: Img11
      },
      {
        id: 12,
        src: Img12
      },
    ],
    modal: false,
    img: ''
  };

  handleClose = () => {
    this.setState({modal: false})
  };

  handleImage = (img) => {
    this.setState({img: img})
    this.setState({modal: true})
  }
  render() {
    let {
      state: { title, work, modal, img },
      handleClose,
      handleImage
    } = this;
    return (
      <Fragment>
        <Work title={title} previous={work} onImg={handleImage} />
        <Modal
          open={modal}
          onClose={handleClose}
          
        >
          <img style={style} src={img} alt='model' />
        </Modal>
      </Fragment>
    );
  }
}

export default WhyUs;

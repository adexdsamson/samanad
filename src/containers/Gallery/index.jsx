import React, { Component, Fragment } from "react";
import { Modal } from '@material-ui/core';
import Work from "../../components/gallery";

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
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293337/samanad1.jpg'
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293328/samanad7.jpg'
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293328/samanad3.jpg'
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293327/samanad11.jpg'
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293327/samanad12.jpg'
      },
      {
        id: 6,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293326/samanad5.jpg'
      },
      {
        id:7,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293325/samanad6.jpg'
      },
      {
        id: 8,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293325/samanad4.jpg'
      },
      {
        id: 9,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293325/samanad0.jpg'
      },
      {
        id: 10,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293325/samanad8.jpg'
      },
      {
        id: 11,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293324/samanad9.jpg'
      },
      {
        id: 12,
        src: 'https://res.cloudinary.com/dymahyzab/image/upload/v1593293322/samanad2.jpg'
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

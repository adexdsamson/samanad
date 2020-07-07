import React, { Component } from "react";
import Button from "../../components/floatButton";
import { withScroll } from 'react-fns';

class FabContainer extends Component {
  state = {
    phone: '7031294035',
    visible: false
  };
  handleWhatsappClick = () => {
    window.location.href = `https://wa.me/234${this.state.phone}`
  }
  render() {
    let { 
      props: { y },
      handleWhatsappClick
    } = this;
    return (
     <div data-aos='fade-down'>
       { y > 350 ?  <Button  onChange={this.onScroll} click={handleWhatsappClick} /> : null}
     </div>
    )
  }
}

export default withScroll(FabContainer);

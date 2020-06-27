import React, { Component } from "react";
import Foot from "../../components/footer";
import Img from "../../assets/icon.png";
import { Facebook, Instagram } from "@material-ui/icons";

class Footer extends Component {
  state = {
    media: [
      {
        id: 1,
        icon: <Facebook style={{ color: "white" }} />,
        link:
          "https://web.facebook.com/Samanad-solarelectrical-company-448911625939383",
      },
      {
        id: 2,
        icon: <Instagram style={{ color: "white" }} />,
        link: "https://www.instagram.com/samanad_solar_electricalcompay/",
      },
    ],
    img: Img,
    phone: "+2348154088459",
    name: "Samanad Company",
    body:
      "Samanad Company is a Nigerian company specialized in clean renewable energy, affordable and uninterrupted smart energy solutions.",
    email: "samanadcompany@gmail.com",
  };
  handleClick = (link) => {
    window.location.href = link;
  };
  render() {
    let {
      state: { media, img, phone, name, email, body },
      handleClick,
    } = this;
    return (
      <Foot
        src={img}
        media={media}
        body={body}
        phone={phone}
        name={name}
        click={handleClick}
        email={email}
      />
    );
  }
}

export default Footer;

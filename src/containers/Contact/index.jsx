import React, { Component } from "react";
import Contacts from "../../components/contact";

class Contact extends Component {
  state = {
    title: 'Contact Us',
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    body: ''
  };
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit = () => {
    window.location.href = `mailto:samanadcompany@gmail.com?subject=${this.state.subject}&cc=${this.state.email}&body='My name is ${this.state.firstName} ${this.state.lastName}, I need your assistance for the following: ${this.state.body}`
  }
  render() {
    let {
      state: { title },
      handleSubmit,
      handleChange
    } = this;
    return <Contacts onSubmit={handleSubmit} title={title} change={handleChange} />;
  }
}

export default Contact;

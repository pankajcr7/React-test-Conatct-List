import React, { Component } from 'react';

class Contact extends Component {
  // Add state and form handling code here to allow editing a contact

  handleDelete = () => {
    this.props.onDeleteContact(this.props.id);
  }

  // Contact.js



  render() {
    return (
      <div className="contact-card">
  <h2>{this.props.name}</h2>
  <p>{this.props.phone}</p>
  <p>{this.props.email}</p>
  <button onClick={this.handleDelete}>Delete</button>
</div>
      // Contact.js


    );
    // Contact.js
// Contact.js


  }

  // Contact.js


}

export default Contact;
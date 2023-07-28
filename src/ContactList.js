import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts.map(contact => (
      <Contact 
        key={contact.id} 
        {...contact} 
        onUpdateContact={this.props.onUpdateContact}
        onDeleteContact={this.props.onDeleteContact}
      />
    ));
    return <div>{contacts}</div>;
  }
}

export default ContactList;
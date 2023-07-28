import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ContactList from './ContactList';
import AddContact from './AddContact';

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({ contacts: res.data });
      });
  }

  addContact = (contact) => {
    axios.post('https://jsonplaceholder.typicode.com/users', contact)
      .then(res => {
        this.setState({ contacts: [...this.state.contacts, res.data] });
      });
  }

  updateContact = (updatedContact) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${updatedContact.id}`, updatedContact)
      .then(res => {
        const contacts = this.state.contacts.map(contact =>
          contact.id === updatedContact.id ? updatedContact : contact
        );
        this.setState({ contacts: contacts });
      });
  }

  deleteContact = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts: contacts });
      });
  }

  render() {
    return (
      <div>
        <AddContact onAddContact={this.addContact} />
        <ContactList 
          contacts={this.state.contacts} 
          onUpdateContact={this.updateContact}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
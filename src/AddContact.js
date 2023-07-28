import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', email: '', phone: '' });
  }

  render() {
    return (
      // AddContact.js

<form onSubmit={this.handleSubmit}>
<label>
  Name:
  <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
</label>
<label>
  Email:
  <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
</label>
<label>
  Phone:
  <input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange} />
</label>
<input type="submit" value="Add Contact" />
</form>
    );
  }
}

export default AddContact;
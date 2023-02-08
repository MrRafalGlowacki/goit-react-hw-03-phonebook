import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddForm } from './AddForm/AddForm';
import { ContactList } from 'components/ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleContactWillUnmount = name => {
    if (this.state.filter !== '') {
      return;
    } else {
      alert(`${name} is removed from your contacts`);
    }
  };
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      const contactsArrayStringified = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', contactsArrayStringified);
    }
  }
  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (!savedContacts) {
      return;
    } else
      try {
        this.setState({ contacts: savedContacts });
      } catch (error) {
        console.log(error);
      }
  }

  handleRemoveContact = id => {
    const remainingContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: remainingContacts });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const found = this.state.contacts.find(
      contact => contact.name === this.state.name
    );
    if (found) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      };
      const newContacts = [contact, ...this.state.contacts];
      this.setState({ contacts: newContacts, name: '', number: '' });
    }
  };
  render() {
    return (
      <>
        <AddForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          name={this.state.name}
          number={this.state.number}
        />
        <ContactList
          contactList={this.state.contacts}
          filter={this.state.filter}
          onChange={this.handleChange}
          onContactRemove={this.handleRemoveContact}
          onUnmount={this.handleContactWillUnmount}
        />
      </>
    );
  }
}

import React, { Component } from 'react';
import Contact from './Contact';

export default class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Vidya Sagar',
        email: 'vs@gmail.com',
        phone: '111-111-1111'
      },
      {
        id: 3,
        name: 'Shiva',
        email: 'shiva@gmail.com',
        phone: '333-333-3333'
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(c => c.id !== id);
    this.setState({ contacts: newContacts });
  };
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

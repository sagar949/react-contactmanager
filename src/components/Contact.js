import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4 className="card-title">{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Contact: {phone}</li>
        </ul>
      </div>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

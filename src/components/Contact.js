import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

export default class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
    // deleteClickHandler: PropTypes.func.isRequired
  };

  state = {
    showContactInfo: false
  };

  onShowClick = event => {
    // event.preventDefault();
    this.setState({ showContactInfo: !this.state.showContactInfo });
    // //console.log(event.target);
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4 className="card-title">
                {name}{' '}
                <i
                  onClick={this.onShowClick}
                  className={
                    this.state.showContactInfo
                      ? 'fas fa-sort-down fa-rotate-270'
                      : 'fas fa-sort-down'
                  }
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-trash-alt"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Contact: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

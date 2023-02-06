import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsListItem.module.css';

export class ContactsListItem extends Component {
  render() {
    const { contactList, filter, removeContact } = this.props;
    const list = contactList
      .filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map(contact => (
        <li key={contact.id} className={css.item}>
          <span className={css.name}>
            {contact.name}: {contact.number}
          </span>{' '}
          <button
            type="button"
            className={css.button}
            onClick={() => removeContact(contact.id)}
          >
            X
          </button>
        </li>
      ));

    return <ul className={css.container}>{list}</ul>;
  }
}
ContactsListItem.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  removeContact: PropTypes.func,
};

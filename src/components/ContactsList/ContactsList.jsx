import React, { Component } from 'react';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactsListItem } from './ContactsListItem/ContactsListItem';

export class ContactList extends Component {
  render() {
    const { contactList, filter, handleChange, removeContact } =
      this.props;

    return (
      <>
        <h3 className={css.title}>Contacts</h3>
        {contactList.length > 0 && (
          <ContactFilter filter={filter} handleChange={handleChange} />
        )}
        {contactList.length > 0 && (
          <ContactsListItem
            contactList={contactList}
            filter={filter}
            removeContact={removeContact}
          />
        )}
      </>
    );
  }
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  handleChange: PropTypes.func,
  removeContact: PropTypes.func,
};

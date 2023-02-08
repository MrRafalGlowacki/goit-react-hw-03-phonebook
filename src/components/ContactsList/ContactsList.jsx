import React, { Component } from 'react';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactsListItem } from './ContactsListItem/ContactsListItem';

export class ContactList extends Component {
  getFilteredList() {
    const { contactList, filter } = this.props;
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  render() {
    const { contactList, filter, onChange, onContactRemove, onUnmount } =
      this.props;

    const list = this.getFilteredList().map(contact => (
      <ContactsListItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        onContactRemove={onContactRemove}
        filter={filter}
        onUnmount={onUnmount}
      />
    ));
    return (
      <>
        <h3 className={css.title}>Contacts</h3>
        {contactList.length > 0 && (
          <ContactFilter filter={filter} onChange={onChange} />
        )}
        {contactList.length > 0 && <ul className={css.container}>{list}</ul>}
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
  onChange: PropTypes.func,
  onContactRemove: PropTypes.func,
  onUnmount: PropTypes.func,
};

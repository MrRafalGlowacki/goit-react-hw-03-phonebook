import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './AddName.module.css';

export class AddName extends Component {
  render() {
    const { handleChange, name } = this.props;
    return (
      <>
        <label htmlFor="name" className={css.name}>
          Name
        </label>
        <input
          onChange={handleChange}
          autoComplete="off"
          placeholder="Enter Name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
  }
}

AddName.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string,
};

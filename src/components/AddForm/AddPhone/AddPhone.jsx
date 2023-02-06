import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './AddPhone.module.css';

export class AddPhone extends Component {
  render() {
    const { handleChange, number } = this.props;
    return (
      <>
        <label htmlFor="number" className={css.number}>
          Number
        </label>
        <input
          onChange={handleChange}
          autoComplete="off"
          type="tel"
          name="number"
          placeholder="Enter number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </>
    );
  }
}

AddPhone.propTypes = {
  handleChange: PropTypes.func,
  number: PropTypes.string,
};

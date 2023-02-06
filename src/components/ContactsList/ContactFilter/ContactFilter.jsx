import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactFilter.module.css';

export class ContactFilter extends Component {
  render() {
    const { filter, handleChange } = this.props;
    return (
      <>
        <p className={css.filter}>Find contacts by name</p>
        <input
          className={css.filter}
          onChange={handleChange}
          autoComplete="off"
          type="text"
          name="filter"
          value={filter}
          placeholder="search..."
        />
      </>
    );
  }
}
ContactFilter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};

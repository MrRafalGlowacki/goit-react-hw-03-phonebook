import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './AddForm.module.css';
import { AddName } from './AddName/AddName';
import { AddPhone } from './AddPhone/AddPhone';

export class AddForm extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };
  render() {
    const { handleChange, handleSubmit, name, number } = this.props;

    return (
      <>
        <h2 className={css.title}>Phonebook</h2>
        <form className={css.form} onSubmit={handleSubmit}>
          <AddName handleChange={handleChange} name={name} />
          <AddPhone handleChange={handleChange} number={number} />
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

AddForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};

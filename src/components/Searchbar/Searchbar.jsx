import React, { Component } from 'react';
import css from './Searchbar.module.css';
import propTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

    handleQueryChange = e => {
        this.setState({ query: e.currentTarget.value.toLowerCase() });
    }

    handleSubmit = e => {
        e.preventDefault();

        const query = this.state.query.trim();
        if (query === '') {
            return alert ('Please add a request!');
        }
        
        this.props.onSubmit(query);
        this.setState({query: ''});
    }

  render() {
    return (
        <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: propTypes.func.isRequired,
  }
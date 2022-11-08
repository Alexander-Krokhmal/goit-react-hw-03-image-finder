import React, { Component } from 'react';

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
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
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

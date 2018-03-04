import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
  }

  render() {
    return <input onChange={event => this.setState({ query: event.target.value })} />;
  }
}

export default SearchBar;

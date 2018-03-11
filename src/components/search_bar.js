import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
  }

  onInputChange(query) {
    this.setState({ query });
    this.props.onSearchTermChange(query);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          id="search-bar-input"
          placeholder="Search.."
          value={this.state.query}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;

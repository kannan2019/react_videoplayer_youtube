import React, { Component } from "react";
class SearchBar extends Component {
  state = { searchText: "" };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchText);
  };
  render() {
    return (
      <div className="searc-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchText}
              onChange={e => this.setState({ searchText: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

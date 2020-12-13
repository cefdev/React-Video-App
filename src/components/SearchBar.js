import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onIputChange = (event) => {
    this.setState({ term: event.target.value });
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onIputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

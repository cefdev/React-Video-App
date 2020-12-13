import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

class App extends Component {
  // Fetch list of videos from YouTube API
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;

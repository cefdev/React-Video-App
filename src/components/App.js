import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./style.css";

class App extends Component {
  // The list of videos from YouTube API will be saved in 'state.videos' array
  state = {
    videos: [],
    selectedVideo: null,
  };

  // Fetch list of videos from YouTube API
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      // Associate the data to 'state.videos' array
      videos: response.data.items,
      // Choose the 1st item to be rendered in the UI after the user search for videos.
      selectedVideo: response.data.items[0],
    });
  };

  // Pass the video the user selected to 'state.selectedVideo
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

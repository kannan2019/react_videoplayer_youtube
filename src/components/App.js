import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./videos/VideoList";
import VideoDetail from "./videos/VideoDetail";
class App extends Component {
  state = { videos: [], selectedVideo: null };
  onSearchSubmit = async searchText => {
    const response = await youtube.get("/search", {
      params: { q: searchText }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelected = video => {
    this.setState({ selectedVideo: video });
  };
  componentDidMount() {
    this.onSearchSubmit("tamil latest");
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />I have{" "}
        {this.state.videos.length} videos.
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelected}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;

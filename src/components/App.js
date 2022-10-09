import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('./search', {
      params: {
        q: term
      }
    })

    console.log('response: ', response);
    this.setState({ videos: response.data.items });    
  }

  onVideoSelect = (video) => {
    console.log('from the App:', video);
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />

        I have {this.state.videos.length} videos.
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          videos={this.state.videos} 
          onVideoSelect={this.onVideoSelect} 
        />
      </div>
    )
  }
}

export default App;

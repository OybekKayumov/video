import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  //default search
  componentDidMount() {
    this.onTermSubmit('study')
  }

  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('./search', {
      params: {
        q: term
      }
    })

    console.log('response: ', response);
    this.setState({ 
      videos: response.data.items, 
      // when we do a Search, take the first video in the result set
      // and use it as default video
      selectedVideo: response.data.items[0]
    });
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

        <div className="ui grid">
          <div className="ui row">
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo}/>
            </div>

            <div className="five wide column">
              <VideoList 
                videos={this.state.videos} 
                onVideoSelect={this.onVideoSelect} 
              />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;

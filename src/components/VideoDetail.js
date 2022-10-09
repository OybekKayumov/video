import React from "react";

const VideoDetail = ({ video }) => {
  // props.video --> video
  // return (
    if (!video) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId} `
    
    return ( 
      <div>
        {/* iframe */}
        <div className="ui embed">
          <iframe src={videoSrc} frameborder="0"></iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p className="">{video.snippet.description}</p>
        </div>
        {video.snippet.title}
      </div>
    )
}

export default VideoDetail;
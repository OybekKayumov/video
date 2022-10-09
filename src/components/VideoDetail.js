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
    
    return ( 
      <div>
        {video.snippet.title}
      </div>
    )
}

export default VideoDetail;
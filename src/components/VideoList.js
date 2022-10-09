import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //props.videos - array

  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId} 
        video={video}
        onVideoSelect={onVideoSelect}  
      />
    )
  })

  return (
    <div>
      {videos.length}
      <div className="ui relaxed divided list">
        {renderedList}
      </div>
    </div>
  )
}

export default VideoList;
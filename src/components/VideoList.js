import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  //props.videos - array

  const renderedList = videos.map((video) => {
    return (
      <VideoItem video={video}/>
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
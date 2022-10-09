import React from "react";

// const VideoList = (props) => {
const VideoList = ({ videos }) => {
  //props.videos - array
  return (
    <div>
      VideoList
      {/* {props.videos.length} */}
      {videos.length}
    </div>
  )
}

export default VideoList;
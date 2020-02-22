import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, onVideoSelect }) => {
  const videoComponent = videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onSelectVideo={onVideoSelect}
    />
  ));
  return <div className="ui relaxed divided list">{videoComponent}</div>;
};
export default VideoList;

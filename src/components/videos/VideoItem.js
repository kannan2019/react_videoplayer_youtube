import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onSelectVideo }) => {
  const { thumbnails, channelTitle, title } = video.snippet;
  return (
    <div className="video-item item" onClick={() => onSelectVideo(video)}>
      <img
        className="ui image"
        src={thumbnails.medium.url}
        alt={channelTitle}
      />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

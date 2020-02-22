import React from "react";
const VideoDetail = ({ video }) => {
  console.log(video);
  if (!video) {
    return <div>Loading...</div>;
  }
  const { title, description } = video.snippet;
  const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video Player" src={videoURL} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p className="ui description">{description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;

import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  // Map over the list of videos from YouTube API and pass each video's data to VideoItem component as a prop
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;

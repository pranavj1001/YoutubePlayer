import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videosList, onVideoSelect, listColor }) => {
  const videoItems = videosList.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
        listColor={listColor}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;

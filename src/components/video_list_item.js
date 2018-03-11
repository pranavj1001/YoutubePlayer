import React from 'react';

const VideoListItem = ({ video, onVideoSelect, listColor }) => {
  const imageURL = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video)} className={listColor}>
      <div className="video_list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>

        <div className="media-body">
          <div className="media_heading">{title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;

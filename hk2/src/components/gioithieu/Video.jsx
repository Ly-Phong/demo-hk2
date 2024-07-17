import React from "react";
import './style.css';

const Video = () => {
  return (
    <div className="iframe-container">
      <iframe
        width="600"
        height="500"
        src="https://www.youtube.com/embed/CVPYKggwTH8"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      ></iframe>
    </div>
  );
};

export default Video;

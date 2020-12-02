import React from 'react';

const Video = ({video_id}) => {

  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/embed/${video_id}`}
        frameBorder="0"
        allowFullScreen
        title={video_id}
      />
    </div>
    );
}

export default Video;
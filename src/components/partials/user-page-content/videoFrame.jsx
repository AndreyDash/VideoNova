import React from "react"
import PropTypes from "prop-types"
// import Button from "../../../primitives/button"
import "./style.css"

function VideoFrame({ videoTitle, text, videoLink }) {
  return (
    <div className="videoFrame">
      <div className="videoFrame__iframe">
        <iframe
          // borderRadius="14"
          padding="5"
          width="285"
          height="160"
          src={videoLink}
          title="player"
          allow="accelerometer"
        />
      </div>
      <div className="videoFrame__heading">{videoTitle}</div>
      <div className="videoFrame__text">{text}</div>
    </div>
  )
}

export default VideoFrame

VideoFrame.propTypes = {
  videoLink: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

import React from "react"
// import { useSelector } from "react-redux"
import PropTypes from "prop-types"
import Button from "../../primitives/button"
import VideoFrame from "./videoFrame"

function userVideos({ name, onClick }) {
  // const videos = useSelector((store) => store.userVideo)
  // console.log(videos)
  const videos = [
    {
      videoLink: "https://www.youtube.com/embed/ECSqy4LGjDc",
      videoTitle: "My youtube video",
    },
    {
      videoLink: "https://www.youtube.com/embed/ECSqy4LGjDc",
      videoTitle: "My youtube video",
    },
    {
      videoLink: "https://www.youtube.com/embed/ECSqy4LGjDc",
      videoTitle: "My youtube video",
    },
    {
      videoLink: "https://www.youtube.com/embed/ECSqy4LGjDc",
      videoTitle: "My youtube video",
    },
  ]
  return (
    <div className="userVideos">
      <div className="userVideos__heading">
        <div className="userName-userVideos">{name} Videos</div>
        <Button variant="main" label="Add video" onClick={onClick} />
      </div>
      <div className="userVideos__videos">
        {videos.map(({ videoLink, videoTitle }) => (
          <VideoFrame
            videoLink={videoLink}
            videoTitle={videoTitle}
            text="description will be here soon"
          />
        ))}
      </div>
    </div>
  )
}

export default userVideos

userVideos.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
}

userVideos.defaultProps = {
  name: "Anna May",
}

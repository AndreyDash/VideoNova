import React, { useState } from "react"
import PropTypes from "prop-types"
// import { NavLink } from "react-router-dom"
import UserVideos from "./userVideos"
import PopUp from "../popUp"
import AddNewVideoForm1 from "../forms/addNewVideoForm1"
// import AddNewVideoForm2 from "../forms/addNewVideoForm2"
import myPhoto from "../../primitives/images/MyPhoto.JPG"
import "./style.css"

function Content({ img, userName }) {
  const [addVideoModalActive1, setAddVideoModalActive1] = useState(false)
  const [addVideoModalActive2, setAddVideoModalActive2] = useState(false)
  return (
    <div className="content">
      <div className="content__userName">
        <div className="userName-img">
          <img width="150px" src={img} alt="userPhoto" />
        </div>
        {userName} videos
      </div>
      {/* <div className="content__userVideos"> */}
      <UserVideos
        onClick={() => setAddVideoModalActive1(true)}
        name={userName}
      />
      {/* </div> */}
      <PopUp active={addVideoModalActive1} setActive={setAddVideoModalActive1}>
        <AddNewVideoForm1
          onClick={() => {
            setAddVideoModalActive1(false)
            setAddVideoModalActive2(true)
          }}
        />
      </PopUp>
      <PopUp active={addVideoModalActive2} setActive={setAddVideoModalActive2}>
        <div>Add New Video LOADING...</div>
      </PopUp>
    </div>
  )
}

export default Content

Content.propTypes = {
  userName: PropTypes.string.isRequired,
  img: PropTypes.string,
}

Content.defaultProps = {
  img: myPhoto,
}

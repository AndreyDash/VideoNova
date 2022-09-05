import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import Button from "../../../primitives/button"
import myPhoto from "../../../primitives/images/MyPhoto.JPG"
import "./bestCreators.css"

function CardUser({ img, videos, likes, cardName }) {
  const auth = useSelector((store) => store.userRegister)
  // path =cardName === auth.userInfo[auth.authNumber].userName ?
  // auth.userInfo[auth.authNumber].userName : ""
  return (
    <div className="cardUser">
      <div className="cardUser__img">
        <img width="130px" src={img} alt="userPhoto" />
      </div>
      <div className="cardUser__heading">{cardName}</div>
      <div className="cardUser__rates">
        <div className="ratesCardUser-videos">{videos} videos</div>
        <div className="ratesCardUser-likes">{likes} likes</div>
      </div>
      <div className="cardUser__button">
        <Button
          variant="main"
          label="To profile"
          onClick={`/user/${auth.authNumber}`}
        />
      </div>
    </div>
  )
}

export default CardUser

CardUser.propTypes = {
  img: PropTypes.string,
  videos: PropTypes.number,
  likes: PropTypes.number,
  cardName: PropTypes.string,
}

CardUser.defaultProps = {
  img: myPhoto,
  videos: 12,
  likes: 255,
  cardName: "default name",
}

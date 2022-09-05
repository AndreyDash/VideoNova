import React from "react"
import { useSelector } from "react-redux"
import icon from "../../../primitives/icons/ranking.png"
import CardUser from "./cardUser"
import "./bestCreators.css"

function BestCreators() {
  const users = useSelector((store) => store.userRegister)
  return (
    <div className="bestCreators">
      <div className="bestCreators__heading">
        BestCreators
        <img src={icon} width="29px" alt="icon here" />
      </div>
      <div className="bestCreators__cardUser">
        {users.userInfo.map((user) => (
          <CardUser
            cardName={user.userName}
            img={user.userPic}
            videos="10"
            likes="120"
          />
        ))}
      </div>
    </div>
  )
}

export default BestCreators

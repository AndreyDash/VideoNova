import React from "react"
// import PropTypes from "prop-types"
// import { NavLink } from "react-router-dom"
import Welcome from "./welcome"
import BestCreators from "./bestCreators"
import "./style.css"

function Content() {
  return (
    <div className="content">
      <div className="content__welcome">
        <Welcome />
      </div>
      <div className="content__bestCreators">
        <BestCreators />
      </div>
      {/* <NavLink to="/">e</NavLink>
      <NavLink to="/user/name">n</NavLink> */}
    </div>
  )
}

export default Content

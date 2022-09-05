import React from "react"
// import { NavLink } from "react-router-dom"
import icon from "../../primitives/icons/logo.svg"
import icon1 from "../../primitives/icons/iconTelegram.png"
import icon2 from "../../primitives/icons/iconDiscord.png"
import icon3 from "../../primitives/icons/iconTwitter.png"
import AdaptiveLink from "../../primitives/adaptiveLink"
import "./style.css"

const footerSocial = [
  { iconSocial: icon1, action: "http://google.com" },
  { iconSocial: icon2, action: "http://google.com" },
  { iconSocial: icon3, action: "http://ukr.net" },
]

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icon">
        <img src={icon} width="26px" alt="icon here" />
      </div>
      <div className="footer__text">All Rights Reserved 2022</div>
      <div className="footer__social">
        {footerSocial.map(({ iconSocial, action }) => (
          <AdaptiveLink action={action}>
            <img src={iconSocial} height="28px" alt="icon here" />
          </AdaptiveLink>
        ))}
        {/* <NavLink to="/user/1">1</NavLink> */}
      </div>
    </div>
  )
}

export default Footer

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import Button from "../../primitives/button"
import PopUp from "../popUp"
import SignUpForm from "../forms/signUpForm"
import icon from "../../primitives/icons/iconMain.png"
import "./style.css"

function Header({ logIn }) {
  const [signUpModalActive, setSignUpModalActive] = useState(false)
  const auth = useSelector((store) => store.userRegister)
  return (
    <div className="header">
      <div className="header__icon">
        <img src={icon} width="26px" alt="icon here" />
      </div>
      {logIn ? (
        <div className="header__logIn">
          <div> {auth.userInfo[auth.authNumber].userName} </div>
          <div className="logInHeader-img">
            <img
              width="53px"
              src={auth.userInfo[auth.authNumber].userPic}
              alt="userPhoto"
            />
          </div>
        </div>
      ) : (
        <Button
          variant="transparent"
          label="SineUp"
          onClick={() => setSignUpModalActive(true)}
        />
      )}
      <PopUp active={signUpModalActive} setActive={setSignUpModalActive}>
        <SignUpForm />
      </PopUp>
    </div>
  )
}

export default Header

Header.propTypes = {
  logIn: PropTypes.bool,
}

Header.defaultProps = {
  logIn: false,
}

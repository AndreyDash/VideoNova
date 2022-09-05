import React, { useState } from "react"
import Button from "../../../primitives/button"
import Heading from "../../../primitives/heading"
import PopUp from "../../popUp"
import SignInForm from "../../forms/signInForm"
import "./welcome.css"

function Welcome() {
  const [signInModalActive, setSignInModalActive] = useState(false)
  return (
    <div className="welcome">
      <div className="welcome__heading">
        <Heading weight="1" colorWordNumber="3">
          Welcome to VideoNova
        </Heading>
      </div>
      <div className="welcome__text">
        Create videos with a single click. Add subtitles, transcribe audio and
        more
      </div>
      <div className="welcome__button">
        <Button
          variant="main"
          label="Start Now"
          onClick={() => setSignInModalActive(true)}
        />
      </div>
      <PopUp active={signInModalActive} setActive={setSignInModalActive}>
        <SignInForm />
      </PopUp>
    </div>
  )
}

export default Welcome

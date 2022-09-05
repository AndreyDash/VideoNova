import React, { useState } from "react"
import PopUp from "../../popUp"
import BaseSignForm from "../baseSignForm"
import SignInForm from "../signInForm"

function SignUpForm() {
  const [isEyeIconDashed, setIsEyeIconDashed] = useState(true)
  const [signInModalActive, setSignInModalActive] = useState(false)
  const inputType = isEyeIconDashed ? "password" : "text"
  const inputs = [
    {
      id: 1,
      name: "userName",
      label: "Name",
      type: "text",
      placeholder: "Type name...",
    },
    {
      id: 2,
      name: "password",
      label: "Password",
      type: inputType,
      placeholder: "Type password...",
    },
    {
      id: 3,
      name: "passwordConfirm",
      label: "Repeat Password",
      type: inputType,
      placeholder: "Repeat password...",
    },
  ]
  return (
    <div>
      <BaseSignForm
        actionSignIn={() => setSignInModalActive(true)}
        actionEyeIcon={() => setIsEyeIconDashed(!isEyeIconDashed)}
        inputs={inputs}
        isEyeIconDashed={isEyeIconDashed}
        buttonLabel="SignUp"
        headingText="Sign Up"
        colorWordNumber="2"
        bottomText="Already have an account? "
        signLink="Sign In"
        warningText="Your Password doesn't match or empty"
        formName="SignUp"
      />
      <PopUp active={signInModalActive} setActive={setSignInModalActive}>
        <SignInForm />
      </PopUp>
    </div>
  )
}

export default SignUpForm

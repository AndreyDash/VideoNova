import React, { useState } from "react"
import BaseSignForm from "../baseSignForm"

function SignInForm() {
  const [isEyeIconDashed, setIsEyeIconDashed] = useState(true)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [warning, setWarning] = useState(false)
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
  ]

  return (
    <div>
      <BaseSignForm
        onClick={() => {
          setWarning(!warning)
          setButtonLoading(!buttonLoading)
        }}
        warning={warning}
        buttonLoading={buttonLoading}
        actionEyeIcon={() => setIsEyeIconDashed(!isEyeIconDashed)}
        inputs={inputs}
        isEyeIconDashed={isEyeIconDashed}
        buttonLabel="SignIn"
        headingText="Sign In"
        colorWordNumber="2"
        bottomText="Do not have an account? "
        signLink="Sign Up"
        warningText="Your Password is incorrect. Please, try again"
        formName="SignIn"
      />
    </div>
  )
}

export default SignInForm

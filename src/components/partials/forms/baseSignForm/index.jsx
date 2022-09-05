import React, { useState } from "react"
import PropTypes from "prop-types"
// import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  userAuthorize,
  userAuthName,
} from "../../../../store/userRegisterSlice"
import SubmitUserForm from "../userFormSubmit.actions"
import Button from "../../../primitives/button"
import EyeIcon from "../../../primitives/eyeIcon"
import AdaptiveLink from "../../../primitives/adaptiveLink"
import Heading from "../../../primitives/heading"
import "./style.css"

function BaseSignForm({
  // onClick,
  formName,
  inputs,
  actionEyeIcon,
  actionSignIn,
  isEyeIconDashed,
  buttonLabel,
  bottomText,
  signLink,
  warningText,
  headingText,
  colorWordNumber,
}) {
  const defaultValues = {
    userName: "",
    password: "",
    passwordConfirm: "",
  }
  const [buttonLoading, setButtonLoading] = useState(false)
  const [warning, setWarning] = useState(false)
  const [nullWarning, setNullWarning] = useState(false)
  const [values, setValues] = useState(defaultValues)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const userAuth = useSelector((store) => store.userRegister)
  const dispatch = useDispatch()
  const onClickActions = () => {
    if (values === null || values.userName === "" || values.password === "") {
      setNullWarning(true)
    } else {
      setNullWarning(false)
      switch (formName) {
        case "SignUp":
          if (values.password !== values.passwordConfirm) {
            setWarning(true)
          } else {
            setButtonLoading(true)
            setTimeout(() => {
              setButtonLoading(false)
            }, 2000)
            delete values.passwordConfirm
            // dispatch(userReg())
            SubmitUserForm(values, false)
            setWarning(false)
            setValues(defaultValues)
          }
          break
        case "SignIn":
          console.log(userAuth.userInfo[0].userName)
          for (let i = 0; i < userAuth.userInfo.length - 1; i += 1) {
            if (userAuth.userInfo[i].userName === values.userName) {
              setWarning(false)
              dispatch(userAuthName(i))
              break
            } else {
              setWarning(true)
            }
          }
          if (!warning) {
            setButtonLoading(true)
            dispatch(userAuthorize(userAuth))
            SubmitUserForm(values, true)
            setTimeout(() => {
              setButtonLoading(false)
            }, 2000)
            setWarning(false)
            setValues(defaultValues)
          }
          break
        default:
          break
      }
    }
  }
  return (
    <div className="signForm">
      <Heading weight="1" colorWordNumber={colorWordNumber}>
        {headingText}
      </Heading>
      {warning && <div className="signForm__warning">{warningText}</div>}
      {nullWarning && <div className="signForm__warning">Empty fields!</div>}
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <div className="signForm__input">
            {(input.name === "password" ||
              input.name === "passwordConfirm") && (
              <EyeIcon
                action={actionEyeIcon}
                isEyeIconDashed={isEyeIconDashed}
              />
            )}
            <div className="signForm-label">{input.label}</div>
            <input
              className="signForm-input"
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          </div>
        ))}
      </form>
      <div className="signForm__button">
        <Button
          variant="main"
          label={buttonLabel}
          loading={buttonLoading}
          onClick={onClickActions}
        />
      </div>
      <div className="signForm__text">
        {bottomText}
        <AdaptiveLink className="signForm-signIn" action={actionSignIn}>
          {signLink}
        </AdaptiveLink>
      </div>
    </div>
  )
}

export default BaseSignForm

BaseSignForm.propTypes = {
  formName: PropTypes.string.isRequired,
  values: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf.isRequired,
  actionEyeIcon: PropTypes.func.isRequired,
  actionSignIn: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isEyeIconDashed: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  redText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  signLink: PropTypes.string.isRequired,
  warningText: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
  colorWordNumber: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonLoading: PropTypes.bool.isRequired,
  warning: PropTypes.bool.isRequired,
}

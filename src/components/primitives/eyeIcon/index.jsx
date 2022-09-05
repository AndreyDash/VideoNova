import React from "react"
import PropTypes from "prop-types"
import AdaptiveLink from "../adaptiveLink"
import eyeOpenIcon from "../icons/eye-open.png"
import eyeDashedIcon from "../icons/eye-dashed.png"

function EyeIcon({ action, isEyeIconDashed }) {
  const eyeIcon = isEyeIconDashed ? eyeDashedIcon : eyeOpenIcon
  return (
    <AdaptiveLink
      style={{
        position: "absolute",
        left: "424px",
        top: "81px",
      }}
      action={action}
    >
      <img src={eyeIcon} width="24px" alt="icon here" />
    </AdaptiveLink>
  )
}

export default EyeIcon

EyeIcon.propTypes = {
  isEyeIconDashed: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
}

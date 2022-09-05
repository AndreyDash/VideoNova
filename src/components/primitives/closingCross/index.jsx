import React from "react"
import PropTypes from "prop-types"
import AdaptiveLink from "../adaptiveLink"
import closingCross from "../icons/closingCross.png"

function ClosingCross({ action }) {
  return (
    <AdaptiveLink
      style={{
        position: "absolute",
        left: "598px",
        top: "25px",
        cursor: "pointer",
        padding: "5px",
      }}
      action={action}
    >
      <img src={closingCross} width="16px" alt="icon here" />
    </AdaptiveLink>
  )
}

export default ClosingCross

ClosingCross.propTypes = {
  action: PropTypes.func.isRequired,
}

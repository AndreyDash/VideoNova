import React from "react"
import PropTypes from "prop-types"
import "./style.css"

function Heading({ weight, colorWordNumber, children }) {
  const headingWeight = Math.max(1, Math.min(weight, 3))
  const TagName = `h${headingWeight}`
  const arrayOfHeading = children.split(" ")
  const firstText = arrayOfHeading.slice(0, colorWordNumber - 1).join(" ")
  const lastText = arrayOfHeading
    .slice(colorWordNumber, arrayOfHeading.length)
    .join(" ")
  return (
    <TagName>
      {firstText}
      <span className="redText">
        &nbsp;
        {arrayOfHeading[colorWordNumber - 1]}
        &nbsp;
      </span>
      {lastText}
    </TagName>
  )
}

export default Heading

Heading.propTypes = {
  weight: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  colorWordNumber: PropTypes.number.isRequired,
}

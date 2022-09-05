import React from "react"
import PropTypes from "prop-types"
import BaseSignForm from "../baseSignForm"
// import Button from "../../../primitives/button"

function AddNewVideoForm({ onClick }) {
  const inputs = [
    {
      id: 1,
      name: "youtubeLink",
      label: "Youtube Link",
      type: "text",
      placeholder: "Past link...",
    },
    {
      id: 2,
      name: "nameOfVideo",
      label: "Name of video",
      type: "text",
      placeholder: "Type name...",
    },
    {
      id: 3,
      name: "description",
      label: "Description",
      type: "text",
      placeholder: "Type description...",
    },
  ]

  return (
    <div>
      <BaseSignForm
        inputs={inputs}
        buttonLabel="Submit"
        headingText="Add New Video"
        colorWordNumber="2"
        warningText="Warning"
        onClick={onClick}
      />
      {/* <Button
        variant="main"
        label="Submit"
        onClick={onClick}
      />  */}
    </div>
  )
}

export default AddNewVideoForm

AddNewVideoForm.propTypes = {
  onClick: PropTypes.func.isRequired,
}

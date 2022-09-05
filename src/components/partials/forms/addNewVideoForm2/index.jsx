import React from "react"
import BaseSignForm from "../baseSignForm"

function AddNewVideoForm() {
  const inputs = [
    {
      id: 1,
      label: "Loading... Loading... Loading...",
    },
  ]

  return (
    <div>
      <BaseSignForm
        inputs={inputs}
        buttonLabel="Cancel"
        headingText="Add New Video"
        colorWordNumber="2"
        warningText="Warning"
      />
    </div>
  )
}

export default AddNewVideoForm

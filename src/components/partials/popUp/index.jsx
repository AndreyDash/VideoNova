import React from "react"
import PropTypes from "prop-types"
import ClosingCross from "../../primitives/closingCross"
import "./style.css"

function PopUp({ active, setActive, children }) {
  return (
    <div className={active ? "signUpModal active" : "signUpModal"}>
      <div
        className={
          active ? "signUpModal__content active" : "signUpModal__content"
        }
        // onClick={(e) => e.stopPropagation()} = оключает в этом блоке действие по клику
      >
        <ClosingCross action={() => setActive(false)} />
        {children}
        {/* сделать лучше здесь через store и redux выбор какую форму рендерим */}
      </div>
    </div>
  )
}

export default PopUp

PopUp.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

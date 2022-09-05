import React from "react"
import PropTypes from "prop-types"
import Header from "../components/partials/header"
import Footer from "../components/partials/footer"
import "./style.css"

function Layout({ children, logIn }) {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header logIn={logIn} />
      </div>
      <div className="layout__content">{children}</div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
Layout.propTypes = {
  logIn: false.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

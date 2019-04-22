import React from "react"

import AboutMe from "../AboutMe"
import Portfolio from "../Portfolio"

import css from "./ContentContainer.module.css"

const componentName = ({ activeSection }) => {
  return (
    <div className={css.content}>
      <AboutMe active={activeSection === "About Me"} />
      <Portfolio active={activeSection === "Portfolio"} />
    </div>
  )
}

export default componentName

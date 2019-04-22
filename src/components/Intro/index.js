import React from "react"

import css from "./Intro.module.css"

import Logo from "../Logo"

const Intro = props => {
  return (
    <div className={css.introContainer}>
      <div className={css.nameAndStatement}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.personalStatement}>
          <h3>Junior fullstack JS developer</h3>
          <p>with industry experience in music, multimedia and education</p>
        </div>
      </div>
      <div className={css.separator} />
      <h2>DAVID ADAMS</h2>
    </div>
  )
}

export default Intro

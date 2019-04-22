import React, { useState, useEffect } from "react"

import css from "./Intro.module.css"

import Logo from "../Logo"
import NavBar from "../NavBar"

const Intro = ({ sections }) => {
  const [topBarSticky, setTopBarSticky] = useState(false)

  const checkScroll = () => {
    const yscroll = window.scrollY
    const introheight = window.outerWidth * 0.15 //intro 12vw + top margin of 3vw

    console.log("yscroll", yscroll)
    console.log("introheight", introheight)

    if (yscroll > introheight) {
      setTopBarSticky(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("scrollfired")
      checkScroll()
    })
  }, [])

  return (
    <div
      className={[css.introContainer, topBarSticky ? css.invisible : ""].join(
        " "
      )}
    >
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
      <div className={css.nameAndNav}>
        <h2>DAVID ADAMS</h2>
        <NavBar sections={sections} />
      </div>
    </div>
  )
}

export default Intro

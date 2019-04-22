import React from "react"

import NavItem from "../NavItem"

import css from "./NavBar.module.css"

const NavBar = ({ sections }) => {
  return (
    <div className={css.navContainer}>
      {sections.map((section, idx) => (
        <NavItem key={`${section}${idx}`} section={section} />
      ))}
    </div>
  )
}

export default NavBar

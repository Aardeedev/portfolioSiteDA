import React from "react"

import css from "./NavItem.module.css"

const NavItem = ({ section }) => {
  return (
    <a className={css.navItem} href={`#${section.replace(" ", "")}`}>
      <h3>{section.toUpperCase()}</h3>
    </a>
  )
}

export default NavItem

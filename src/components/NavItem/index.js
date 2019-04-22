import React from "react"

import css from "./NavItem.module.css"

const NavItem = ({ section, width, setActiveSection }) => {
  return (
    <div
      className={css.navItem}
      style={{ width: `${width}%` }}
      onClick={() => setActiveSection(section)}
    >
      <h3>{section.toUpperCase()}</h3>
    </div>
  )
}

export default NavItem

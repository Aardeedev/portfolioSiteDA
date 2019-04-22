import React from "react"

import NavItem from "../NavItem"

import css from "./NavBar.module.css"

const NavBar = ({ sections, setActiveSection }) => {
  const width = 100 / sections.length

  return (
    <div className={css.navContainer}>
      {sections.map((section, idx) => (
        <NavItem
          key={`${section}${idx}`}
          section={section}
          setActiveSection={setActiveSection}
          width={width}
        />
      ))}
    </div>
  )
}

export default NavBar

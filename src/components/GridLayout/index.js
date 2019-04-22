import css from "./GridLayout.module.css"

import React from "react"

const GridLayout = ({ children }) => {
  return <div className={css.grid}>{children}</div>
}

export default GridLayout

import css from "./GridLayout.module.css"

import React from "react"

const GridLayout = ({ children }) => {
  const grid = {
    display: `grid`,
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridTemplateAreas: `". . ." ". . ."`,
  }

  return <div className={css.grid}>{children}</div>
}

export default GridLayout

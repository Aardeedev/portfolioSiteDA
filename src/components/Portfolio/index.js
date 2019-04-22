import React from "react"

import GridLayout from "../GridLayout"

import css from "./Portfolio.module.css"

const Portfolio = ({ active }) => {
  return (
    <>
      <div
        className={[css.portfolio, !active ? css.inactive : ""].join(" ")}
        id="Portfolio"
      >
        <div className={css.description}>
          <h2 style={{ textAlign: "center" }}>Portfolio</h2>
          <p>A small selection of some of my recent projects</p>
        </div>
        <GridLayout>
          <p style={{ backgroundColor: "grey" }}>A</p>
          <p style={{ backgroundColor: "grey" }}>A</p>
          <p style={{ backgroundColor: "grey" }}>A</p>
          <p style={{ backgroundColor: "grey" }}>A</p>
          <p style={{ backgroundColor: "grey" }}>A</p>
          <p style={{ backgroundColor: "grey" }}>A</p>
        </GridLayout>
      </div>
    </>
  )
}

export default Portfolio

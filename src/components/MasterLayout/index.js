import React from "react"
import css from "./MasterLayout.module.css"

const MasterLayout = props => <div className={css.layout}>{props.children}</div>

export default MasterLayout

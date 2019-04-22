import React from "react"

import logo from "../../images/logo.svg"

import css from "./Logo.module.css"

const Logo = props => (
  <img className={css.logo} src={logo} alt="logo for david adams developer" />
)

export default Logo

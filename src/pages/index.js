import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import MasterLayout from "../components/MasterLayout"
import Intro from "../components/Intro"
import AboutMe from "../components/AboutMe"
import Portfolio from "../components/Portfolio"

const DAHomepage = () => {
  const [sections, setSections] = useState([
    "About Me",
    "Portfolio",
    "Music",
    "Other Skills",
  ])

  return (
    <>
      <SEO
        title="David Adams Portfolio Homepage"
        keywords={[`David`, `Adams`, `Dave`, `Junior`, `Developer`, `React`]}
      />
      <MasterLayout>
        <Intro sections={sections} />
        <AboutMe />
        <Portfolio />
      </MasterLayout>
    </>
  )
}

export default DAHomepage

import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import MasterLayout from "../components/MasterLayout"
import Intro from "../components/Intro"
import ContentContainer from "../components/ContentContainer"

const Index = () => {
  const [sections, setSections] = useState([
    "About Me",
    "Portfolio",
    "Other Skills",
    "More Info",
  ])

  const [activeSection, setActiveSection] = useState("About Me")

  return (
    <>
      <SEO
        title="David Adams Portfolio Homepage"
        keywords={[`David`, `Adams`, `Dave`, `Junior`, `Developer`, `React`]}
      />
      <MasterLayout>
        <Intro sections={sections} setActiveSection={setActiveSection} />
        <ContentContainer activeSection={activeSection} />
      </MasterLayout>
    </>
  )
}

export default Index

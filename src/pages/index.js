import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import MasterLayout from "../components/MasterLayout"
import Intro from "../components/Intro"

const DAHomepage = () => (
  <>
    <SEO
      title="David Adams Portfolio Homepage"
      keywords={[`David`, `Adams`, `Dave`, `Junior`, `Developer`, `React`]}
    />
    <MasterLayout>
      <Intro />
    </MasterLayout>
  </>
)

export default DAHomepage

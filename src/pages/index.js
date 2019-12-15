import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Selam Millet</h1>
    <p>Gatsby sitesine hoş geldiniz..</p>
    <p>BU da 3. üçüncü değişiklik</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">sayfa 2</Link>
  </Layout>
)

export default IndexPage

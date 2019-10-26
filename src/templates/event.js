import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventTemplate = () => (
  <Layout>
    <SEO title="Event" />
    <h1>This is an event</h1>
    <p>Seeing this page means <code>createPage</code> works expected.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default EventTemplate

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

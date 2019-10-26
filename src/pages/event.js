import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventPage = () => (
  <Layout>
    <SEO title="Event" />
    <h1>This is a fallback event page</h1>
    <p>Seeing this page means <code>createPage</code> is not working as expected.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default EventPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

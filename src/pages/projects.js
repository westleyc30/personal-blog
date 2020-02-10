import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" description="The page where I store my projects" />
    <h1>Projects</h1>
    <p>Welcome to the projects page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage

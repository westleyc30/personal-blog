import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Nav = () => (
  <nav>
    <Link
      to="/blog/"
      style={{
        color: `white`,
      }}
    >
      blog
    </Link>
    <Link to="/projects/">projects</Link>
  </nav>
)

export default Nav

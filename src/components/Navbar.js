import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';


export default function Navbar() {
    //Can only be used once in a component
  const data = useStaticQuery(graphql`
  query SiteInfo {
  site {
    siteMetadata {
      title
    }
  }
}
`);
  console.log('Navbar data', data);
  const {title} = data.site.siteMetadata
  return (
    <nav>
        <h1>{title}</h1>
        <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        </div>
    </nav>
  )
}

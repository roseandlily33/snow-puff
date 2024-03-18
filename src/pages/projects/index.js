import React from 'react';
import Layout from '../../components/Layout';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default function ProjectsIndex({data}) {
  console.log('Projects', data)
  const projects = data.allMarkdownRemark.nodes
  //data.allMarkdownRemark.nodes[0].frontmatter.title/slug/date or [0].id
  return (  
   <Layout>
     <div>
      <h2>ProjectsIndex</h2>
      {projects.map(project => (
         <div>
        <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>{project.frontmatter.title}</Link>
        <Img fluid={project.frontmatter.thumb.childImageSharp}/>
        <h3>{project.frontmatter.title}</h3>
        </div>
      ))}
     </div>

   </Layout>
  )
}

export const query = graphql`
query ProjectsPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        slug
        date(locale: "")
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`;

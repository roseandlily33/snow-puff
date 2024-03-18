
import React from 'react';
import Layout from '../components/Layout';
import Img from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

export default function ProjectDetails({data}) {
    console.log('Single product page', data);
    const {html} = data.markdownRemark;
    const {title} = data.markdownRemark.frontmatter
  return (
   <Layout>
    <div>
    <h1>Project Details</h1>
    <h2>{title}</h2>
    {/* Image */}
    <div dangerouslySetInnerHTML={{ __html: html}}/>
    </div>
   </Layout>
  )
}

export const query = graphql`
 query MyQuery($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      thumb {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
}
`;
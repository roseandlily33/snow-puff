import * as React from "react";
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css';
import {Link, graphql} from 'gatsby';
//graphql

export default function Home() {
  //{data} pass it in as props
  //console.log('Home data', data)
  //Data => site.siteMetadata.description 
  //const {title, description} = data.site.siteMetadata
  return (
    <Layout>
    <section className={styles.headerDiv}>
      <h1>Hello world!</h1>
      {/* <h2>Title: {title}</h2>
      <h2>Description: {description}</h2> */}
      <h2>Bonjour</h2>
      <Link to="/"></Link>
    </section>
    <img src="/undraw_cooking_p7m1.svg" alt="cooking" style={{height: '150px', width: '150px'}}/>
    </Layout>
  )
}
//Fires the query first/onload and it gives us access to the data property in the props
// export const query = graphql`
//   query SiteInfo {
//   site {
//     siteMetadata {
//       description
//       title
//     }
//   }
// }
// `;

export const query = graphql`
  query myQuery{
    file(relativePath: {eq: "coffeeImage.svg"}) {
    childImageSharp {
      fluid {
        src
        srcSet
        sizes
      }
    }
  }
  }
`;
import React from "react"
import { StaticQuery, graphql } from "gatsby"
//components
import PrivateItem from '../components/privateItem'

const PrivateItems = () => (
  <StaticQuery
    query={graphql`
      {
        items: allDataJson {
          nodes {
            imageBg {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            slug
            intro
            category
          }
        }
      }
    `}
    render={data => {
      // const { items: { nodes: items } } = data
      const items = data.items.nodes
      console.log(items)
        return(
            <section>
              <PrivateItem items={items} />
            </section>
        )
    }}
  ></StaticQuery>
)

export default PrivateItems

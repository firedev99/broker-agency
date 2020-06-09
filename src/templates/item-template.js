import React from "react"
import { graphql } from "gatsby"
const ItemTemplate = ({ data }) => {
    let items = data.items 
    const bg = data.items.imageBg.childImageSharp.fluid
    return(
        <section className="template_wrapper">
            <div className="template_wrapper_img">
                <img src={require(`../assests/private1-main.jpg`)} alt=""/>
            </div>
            <h1>{items.title}</h1>
        </section>
    )
}

export const query = graphql`
query GetItemPage($slug: String, $category: String) {
    items: dataJson(slug: {eq: $slug}, category: {eq: $category}) {
      title
      volume
      townhouseSpace
      release
      descriptionNeighbourhood
      descriptionAbout
      class
      apartmentSpace
      imageAbout {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      imageBg {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageNeighbourhood {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      images {
        src {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default ItemTemplate

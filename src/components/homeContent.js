import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import ParallaxItem from '../hooks/parallaxItem'

const HomeContent = () => {
  const data = useStaticQuery(graphql`
    {
      floating: file(relativePath: {eq: "floating.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
      <section className="content_wrapper">
        <div className="content_wrapper_shell">
            <div className="content_wrapper_shell_items">
                <h1>People-oriented spaces that ensure the best quality of your everyday life</h1>
                <p>With change comes opportunity. In this case—the opportunity to live and work better. Creating life improving spaces and delivering value for the long term is the way we get things done.</p>
                <button>
                    <Link to="/about/">about axio group</Link>
                </button>
            </div>
            <div className="content_wrapper_shell_bg">
                <ParallaxItem className="floating">
                    <Img fluid={data.floating.childImageSharp.fluid} />
                </ParallaxItem>
            </div>
        </div>
      </section>
  )
}

export default HomeContent


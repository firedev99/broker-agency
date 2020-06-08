import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const PrivateIntro = () => {
  const data = useStaticQuery(graphql`
    {
      private: file(relativePath: {eq: "family-bg.jpg"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="private_wrapper">
        <div className="private_wrapper_bg">
            <Img className="private_img" fluid={data.private.childImageSharp.fluid} />
        </div>
        <div className="private_wrapper_intro">
            <div className="private_wrapper_intro_heading">
                <h1>Living spaces for days well spent</h1>
            </div>
            <div className="private_wrapper_intro_content">
                <h3>We design living spaces that are built to support your key life experiences. Whether it is a convenient indoor cycling infrastructure to support your favorite hobby, or a smart use of glass, ensuring excellent natural lighting during your breakfast with the family—we got you covered.</h3>
            </div>
        </div>
    </section> 
  )
}

export default PrivateIntro


        
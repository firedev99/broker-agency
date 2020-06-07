import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
//component
import HomeContent from '../components/homeContent'

const Home = () => {
  const [hovered, setHovered] = useState(false)
  const data = useStaticQuery(graphql`
    {
     bg: file(relativePath: {eq: "front-model.png"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <section className="home_wrapper">
        <div className="home_wrapper_bg">
          <div className="home_left">
            <h1>
              <span>Progressive spaces for</span> <br/>
              <span>a better living</span> 
            </h1>
          </div>
          <div className="home_center">
            <Img fluid={data.bg.childImageSharp.fluid} />
          </div>
          <div className="home_right">
          <h3> M.M.M. projects become AXIO group. For those aiming to live and work better.</h3>
          </div>
        </div>
      </section> 
      <section className="home_content">
        <div className="home_content_wrapper">
          <div className="home_content_wrapper_items">
            <div className="home_content_wrapper_items_heading">
            <h3>We always want to feel you a comfortable life.</h3>
            <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m426 495.983h-340c-25.364 0-46-20.635-46-46v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 7.72 6.28 14 14 14h340c7.72 0 14-6.28 14-14v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 25.364-20.635 46-46 46z"/><path d="m496 263.958c-4.095 0-8.189-1.562-11.313-4.687l-198.989-198.987c-16.375-16.376-43.02-16.376-59.396 0l-198.988 198.988c-6.248 6.249-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627l198.988-198.989c28.852-28.852 75.799-28.852 104.65 0l198.988 198.988c6.249 6.249 6.249 16.379 0 22.627-3.123 3.125-7.218 4.687-11.313 4.687z"/><path d="m320 495.983h-128c-8.837 0-16-7.164-16-16v-142c0-27.57 22.43-50 50-50h60c27.57 0 50 22.43 50 50v142c0 8.836-7.163 16-16 16zm-112-32h96v-126c0-9.925-8.075-18-18-18h-60c-9.925 0-18 8.075-18 18z"/></g></svg>
            </div>
            <motion.button onHoverStart={() => setHovered(!hovered)} onHoverEnd={() => setHovered(!hovered)}>
              <span className="arrow">
                <motion.svg animate={{x: hovered ? 34 : 0}} transition={{ease: [0.1,0.5,0.9,0.01], duration: 0.3}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                  <path d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z" fill="#FFF" fillRule="evenodd"></path>
                </motion.svg> 
              </span>
              <Link to="/private">Private properties</Link>
            </motion.button>
          </div>
          <div className="home_content_wrapper_items">
          <div className="home_content_wrapper_items_heading">
            <h3>we build unique architectures.</h3>
            <svg id="_x31__px" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_1_"><path d="m14 9.09 8.81 1.75c.71.15 1.19.75 1.19 1.46v10.2c0 .83-.67 1.5-1.5 1.5h-9c.28 0 .5-.22.5-.5v-.5h8.5c.27 0 .5-.22.5-.5v-10.2c0-.23-.16-.44-.39-.49l-8.61-1.7z"/><path d="m19.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"/><path d="m19.5 17c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"/><path d="m19.5 20c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"/><path d="m14 23.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.5-13.5c0-.15.07-.29.18-.39.12-.09.27-.13.42-.1l.4.08v1.02 12.89z"/><path d="m13 23v.5c0 .28.22.5.5.5h-4c.28 0 .5-.22.5-.5v-.5z"/><path d="m10.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"/><path d="m11 8.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"/><path d="m10.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"/><path d="m10.5 14c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"/><path d="m6 14.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5z"/><path d="m5.5 5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"/><path d="m5.5 8c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"/><path d="m5.5 11c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"/><path d="m9 18.5c0-.28-.23-.5-.5-.5h-3c-.28 0-.5.22-.5.5v4.5h-1v-4.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v4.5h-1z"/><path d="m5 23h4 1v.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5v-.5z"/><path d="m1.75.2 10.99 1.67c.73.12 1.26.74 1.26 1.48v5.74l-.4-.08c-.15-.03-.3.01-.42.1-.11.1-.18.24-.18.39v-6.15c0-.25-.18-.46-.42-.5l-10.99-1.66c-.03-.01-.06-.01-.09-.01-.12 0-.23.04-.32.12-.12.1-.18.23-.18.38v20.82c0 .28.23.5.5.5h2.5v.5c0 .28.22.5.5.5h-3c-.83 0-1.5-.67-1.5-1.5v-20.82c0-.44.19-.86.53-1.14.34-.29.78-.41 1.22-.34z"/></g></svg>
            </div>
            <motion.button onHoverStart={() => setHovered(!hovered)} onHoverEnd={() => setHovered(!hovered)}>
              <span className="arrow">
                <motion.svg animate={{x: hovered ? 34 : "0"}} transition={{ease: [0.1,0.5,0.9,0.01], duration: 0.3}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                  <path d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z" fill="#FFF" fillRule="evenodd"></path>
                </motion.svg> 
              </span>
              <Link to="/private">Buniess properties</Link>
            </motion.button>
          </div>
          <div className="home_content_wrapper_items">
          <div className="home_content_wrapper_items_heading">
            <h3>We are always willing to serve 'you'.</h3>
            <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m426 495.983h-340c-25.364 0-46-20.635-46-46v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 7.72 6.28 14 14 14h340c7.72 0 14-6.28 14-14v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 25.364-20.635 46-46 46z"/><path d="m496 263.958c-4.095 0-8.189-1.562-11.313-4.687l-198.989-198.987c-16.375-16.376-43.02-16.376-59.396 0l-198.988 198.988c-6.248 6.249-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627l198.988-198.989c28.852-28.852 75.799-28.852 104.65 0l198.988 198.988c6.249 6.249 6.249 16.379 0 22.627-3.123 3.125-7.218 4.687-11.313 4.687z"/><path d="m320 495.983h-128c-8.837 0-16-7.164-16-16v-142c0-27.57 22.43-50 50-50h60c27.57 0 50 22.43 50 50v142c0 8.836-7.163 16-16 16zm-112-32h96v-126c0-9.925-8.075-18-18-18h-60c-9.925 0-18 8.075-18 18z"/></g></svg>
            </div>
            <motion.button onHoverStart={() => setHovered(!hovered)} onHoverEnd={() => setHovered(!hovered)}>
              <span className="arrow">
                <motion.svg animate={{x: hovered ? 34 : 0}} transition={{ease: [0.1,0.5,0.9,0.01], duration: 0.3}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                  <path d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z" fill="#FFF" fillRule="evenodd"></path>
                </motion.svg> 
              </span>
              <Link to="/private">Contact us</Link>
            </motion.button>
          </div>
        </div>
      </section>
      <HomeContent />
    </>
  )
}

export default Home




    

    
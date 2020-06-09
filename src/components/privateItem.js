import React, { useState } from 'react'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
 
const PrivateItem = (props) => {
    const [hovered, setHovered] = useState(false)
    let items = props.items
    return (
        <section className="items_wrapper">
            {items.map((item, index) => (
                <div className="items_wrapper_item" key={index}>
                    <Img className="imgBg" fluid={item.imageBg.childImageSharp.fluid} />
                    <motion.div onMouseEnter={() => setHovered(!hovered)} onMouseLeave={() => setHovered(!hovered)} className="items_wrapper_item_details">
                         <h3>
                             <span>{item.title}</span>
                             <span>{item.title}</span>
                         </h3>
                         <p><span>'{item.title}'</span> {item.intro}</p>
                         <div className="view">
                             <span> 
                             <Link to={`/${item.category}/${item.slug}`}>
                                <h5>view project</h5>
                                <motion.svg animate={{x: hovered ? 30 : 0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                                    <path d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z" fill="#FFF" fillRule="evenodd"></path>
                                </motion.svg> 
                             </Link>
                             </span>
                         </div>
                    </motion.div>
                </div>
            ))}
        </section>
    )
}

export default PrivateItem

import React, { useState } from "react"
import PropTypes from "prop-types"
import useDocumentScrollThrottled from '../hooks/useDocumnetScrollThrottled'
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowHeader, setShouldShowHeader] = useState(false)

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrollDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowHeader(currentScrollTop > 2);
    setTimeout(() => {
      setShouldHideHeader(isScrollDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })
  
  const shadowStyle = shouldShowHeader ? 'shadow' : "";
  const hiddenStyle = shouldHideHeader ? 'hidden' : "";
  
  return(
    <header className={`header ${shadowStyle} ${hiddenStyle}`}>
        <div className="header_logo">
          <Link to="/">
            <h1>
              <span>{siteTitle}</span>
              <span>{siteTitle}</span>
            </h1>
          </Link>
        </div>
        <div className="header_list">
          <ul>
            <li className="header_link">
              <Link to="/private/">for life</Link>
            </li>
            <li className="header_link">
              <Link to="/business/">for business</Link>
            </li>
            <li className="header_link">
              <Link to="/private/">about us</Link>
            </li>
            <li>
              <button className="button">
                <span className="one"></span>
                <span className="two"></span>
              </button>
            </li>
          </ul>
        </div>
      
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

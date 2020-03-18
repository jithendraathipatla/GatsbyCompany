import React, { useState } from "react"
import { css } from "@emotion/core"
import { FaAlignRight } from "react-icons/fa"
import Logo from "../images/logonew.png"
import { Link } from "gatsby"

const Navbar = () => {
  const [state, setstate] = useState(false)
  const handelToogle = () => {
    {
      state === false ? setstate(true) : setstate(false)
    }
  }
  const closingNav = () => {
    setstate(false)
  }
  return (
    <div>
      <nav css={navbar}>
        <div css={nav_center}>
          <div css={nav_header}>
            <Link to="/">
              <img src={Logo} alt="livexcellence" />
            </Link>
            <button type="button" css={nav_btn} onClick={handelToogle}>
              <FaAlignRight css={nav_icon} />
            </button>
          </div>
          <ul css={state === true ? `nav_links show_nav`: nav_links}>
            <li onClick={closingNav}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={closingNav}>
              <Link to="/upcoming">Upcoming</Link>
            </li>
            <li onClick={closingNav}>
              <Link to="/newlaunch">New Launch</Link>
            </li>
            <li onClick={closingNav}>
              <Link to="/readytomove">Ready To Move</Link>
            </li>
            <li>
              <Link to="/team" className="displaying-team">
                Team
              </Link>
            </li>
            <li onClick={closingNav}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;

const navbar = css`
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 1;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.09);
  background: white;
`
const nav_center = css`
@media screen and (min-width: 768px) {
    margin: 0 20px;
    display: flex;
    justify-content:space-between;
}
`;

const nav_header = css`
    display: flex;
    justify-content: space-between;
    padding: 15px 0px;
`;

const nav_btn = css`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  @media(min-width: 768px) {
      display: none;
  }
`;

const nav_icon= css`
 font-size:1.5rem;
`

const nav_links = css`
  height: 0;
  overflow: hidden;
  transition:all 0.3s linear;
  list-style-type: none;
  a {
    display: block;
    text-decoration: none;
    padding: 1rem 0;
    color: #000000;
    transition:all 0.3s linear;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.025rem;
    :focus {
        color: #9c27b0;
    }
    :hover {
        color: #a5d6a7;
    }
  }
  @media(min-width: 768px) {
    height: auto;
      display: flex;
      a{
      margin: 0 1.3rem;
      color: #2e7d32;
      padding: 25px 0;
      }
  }

`;

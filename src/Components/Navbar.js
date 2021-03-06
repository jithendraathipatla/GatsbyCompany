import React, { useState } from "react"
import { css } from "@emotion/core"
import { FaAlignRight } from "react-icons/fa"
import Logo from "../images/logonew.png"
import { Link } from "gatsby"
import '../GlobalStyle/main.css'

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
              <Link to="/" activeClassName="activeabcd">Home</Link>
            </li>
            <li onClick={closingNav}>
              <Link to="/upcoming" activeClassName="activeabcd">Upcoming</Link>
            </li>
            <li onClick={closingNav}>
              <Link to="/newlaunch" activeClassName="activeabcd">New Launch</Link>
            </li>
            <li onClick={closingNav}>
              <Link to="/readytomove" activeClassName="activeabcd">Ready To Move</Link>
            </li>
            <li css={notdisplaying}>
              <Link to="/team" className="displaying-team" activeClassName="activeabcd">
                Team
              </Link>
            </li>
            <li onClick={closingNav}>
              <Link to="/contact" activeClassName="activeabcd">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;

const activeone = css`
border-bottom:"2px solid";
 color:"#8a4baf"; 
 border-color:"#8a4baf"; 
`
const navbar = css`
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 40;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.09);
  background: white;
  a{
    @media(max-width:600px){
      color:black;
      text-decoration:none;
    }
  }
  li a{
    @media(max-width:600px){
    padding-left: 10px;
    padding-bottom: 20px;
    display: block;
    }
  }
`
const notdisplaying = css`
  @media(max-width:600px){
    display:none;
  }
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
  @media(max-width:600px){
    padding-right:6px;
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

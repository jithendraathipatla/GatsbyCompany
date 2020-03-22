import React from 'react';
import {css} from '@emotion/core';
import Titleabc from '../Components/Title';
import {Link} from 'gatsby'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitterSquare
} from "react-icons/fa";

const Foooter = () => {
    return (
        <div css={footerabc}>
            <div>
            <Titleabc title="LivExcellence"/>
            LivExcellence is the one stop destination for all your property needs.
             LivExcellence is the one stop destination if you wish to buy properties, sell or rent them.
             We also provide the services like interior designing and doing site Visits.
            </div>
            <div>
            <Titleabc title="Our Commitment"/>
            <div css={useful}>
              <div>Who we are</div>
              <div>Our Mission</div>
              <div>Our Vision</div>
              <div>What we Deliver</div>
            </div>
            </div>
            <div>
            <Titleabc title="Some Important Links"/>
            <div css={useful}>
            <div>Properties In Bangalore</div>
            <div>Properties in Chennai</div>
            <div>Properties in Mumbai</div>
            <div>Properties in Hyderabad</div>
            </div>
            </div>
            <div css={social}>
            <Titleabc title="Follow us"/>
            <Link to="/"><FaFacebook title="Follow us on Facebbok" style={{color: "rgb(59, 89, 152)"}}/></Link>
            <Link to="/"><FaInstagram title="Follow us on Instagagram" style={{color: "#8a3ab9"}}/></Link>
            <a target="_blank" href="https://www.linkedin.com/in/live-xcellence-878306193/"><FaLinkedin title="Follow us on LinkedIN" style={{color: "#0077b5"}}/></a>
            <a target="_blank" href="https://twitter.com/Livexcellence2/"><FaTwitterSquare title="Follow us on Twitter" style={{color: "rgb(0, 172, 238)"}}/></a>       
            </div>
        </div>
    );
};

export default Foooter;

const footerabc = css`
  border-top:2px solid #eeee;
   padding:0px 20px 0px 60px;
   display:grid;
   grid-template-columns: 5fr 2fr 3fr 2fr;
   grid-gap:10px 30px;
   font-size:1.1rem;
   color:#000000;
   margin-bottom:10px;
   div{
       text-align:justify;
   }  
   @media(max-width:600px){
     display:block;
     padding:10px;
     
   }
`
const useful = css`
  display:block;
  div{
  padding-bottom:6px;
  :hover{
    cursor: pointer;
    color:#403d3e;
    transform:translateY(-0.9px);
    text-decoration:underline;
  }
  }
`;


const social = css`
  svg{
      margin-right:10px;
      font-size:2rem;
      border:1px solid #eeee;
      padding:2px;
      :hover{
          background-color:#eeee;
          transform:translateY(-1px);
          border-radius:30%;
      }
    }
`;
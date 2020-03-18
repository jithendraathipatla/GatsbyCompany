import React from 'react';
import {css} from '@emotion/core';


const Hero = (props) => {
    return (
        <div css={defaultHero}>
          <img alt="default" src={props.img}/>
          <div style={{textAlign:"center"}}>
          <div css={banner}>
            <h1>{props.quote1}</h1>
            <br/>
            <div style={{textAlign:"center"}}>
            <h2>{props.quote2}</h2>
          </div>
          </div>
          </div>
        </div>
    );
};

export default Hero;


const defaultHero = css`
img{ 
width:100%;
height:80vh;
position:relative; 
align-items:center;
}
`
const banner = css`
background: #00000073;
position:absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
padding:20px;
border:5px;
color:white;
font-size:1rem;
text-shadow: 0px 9px 4px rgba(0,0,0,0.2);
`
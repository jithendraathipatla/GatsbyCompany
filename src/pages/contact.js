import React from 'react';
import '../GlobalStyle/main.css';
import NavbarAbc from '../Components/Navbar';
import Footerabc from '../Components/Foooter';
import {css} from '@emotion/core';
import FormComponent from '../Components/Form';
import TitleComponent from '../Components/Title';

const contact = () => {
    return (
        <div>
            <NavbarAbc/>
              <div css={main}>
                <div css={form}>
                  <div style={{textAlign:"center"}}>
                    <TitleComponent title="Intrested in meeting us, give your details we Reach you back in no Time!!"/>
                  </div>
                  <div css={innerform}>
                    <FormComponent />
                  </div>
                </div>
                <div css={map}>
                  <div style={{textAlign:"center"}}>
                   <TitleComponent title="Want to locate us, Here Is the Map to your Rescue!!"/>
                  </div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.737490217833!2d77.69523562380542!3d13.007987766561385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe0b953a308e05d69!2sLIV%20EXCELLENCE!5e0!3m2!1sen!2sin!4v1572584085678!5m2!1sen!2sin" frameBorder="0"  style={{border: "0px", height: "460px", width: "100%"}}></iframe>
                </div> 
              </div>
            <Footerabc/>
        </div>
    );
};

export default contact;


const main = css`
 display:flex;
 padding-top:10vh;
 margin:30px;
 @media(max-width:600px){
     display:block;
     margin:10px;
 }
`

const form = css`
 flex:4;
`

const map = css`
  flex:8;
  padding-left:30px;
  @media(max-width:600px){
   padding-left:0px;
}
`

const innerform = css`
 padding:20px;
 box-shadow:0px 0px 2px 3px rgba(0,0,0,0.2);
`
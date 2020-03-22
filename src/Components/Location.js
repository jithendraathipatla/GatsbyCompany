import React from "react"
import Mainlogo from "../images/logonew.png";
import { css } from "@emotion/core"
import TitleComponent from "../Components/Title"
import FormComponent from '../Components/Form'
import ComingSoonImage from '../images/Coming-Soon-Project-.jpg';


const Location = (props) => {
  const displaymap = () => {
    return(
      <div> <iframe
      src={props.data}
      width="100%"
      height="460"
      frameBorder="0"
      tabIndex="0"
      title={props.project}
    ></iframe></div>
     
    )
  }

  const comings = () => {
    return(
      <div css={replacemap}>
      <img src={ComingSoonImage} alt="coming soon"/>      
      </div>
    )
  }


  return (
    <div css={main}>
    <div css={map}>
      <div style={{textAlign: "center"}}>
        <TitleComponent title={props.project}/>
      </div>
        {props.data == "nodata" ? comings() :  displaymap()}
      </div>
      <div css={two}>
      <div style={{textAlign: "center"}}>
        <TitleComponent title="Get in touch with Us!" />
      </div>
      <div css={form}>
        <div css={logo}>
         <img alt="livexcellence" src={Mainlogo}/>
        </div>
       <FormComponent project_name={props.project}/>
      </div>
      </div>
    </div>
  )
}

const logo = css`
 text-align:center;
`

const two= css`
 padding:10px;
 padding-left:0px;
 display:block;
 flex:4;
 @media(max-width:600px){
   padding:10px;
 }
`
const main = css`
  display:flex;
  @media(max-width:600px){
    display:block;
  }
`

const map = css`
  padding: 10px;
  display:block;
  flex:8;
`
const form = css`
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  padding: 10px;
  height:438px;
`

const replacemap = css`
 text-align:center;
 margin-top:50px;
 img{
 @media(max-width:600px){
   width:200px;  
 }
}
`

export default Location;

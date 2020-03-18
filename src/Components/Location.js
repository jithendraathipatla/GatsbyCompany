import React from "react"
import { css } from "@emotion/core"
import TitleComponent from "../Components/Title"


const Location = (props) => {
  return (
    <div css={main}>
    <div css={map}>
      <div style={{textAlign: "center"}}>
        <TitleComponent title={props.project}/>
      </div>
        <iframe
          src={props.data}
          width="100%"
          height="450"
          frameBorder="0"
          tabIndex="0"
          title={props.project}
        ></iframe>
      </div>
      <div css={two}>
      <div style={{textAlign: "center"}}>
        <TitleComponent title="Get in touch with Us!" />
      </div>
      <div css={form}>Form will come up here</div>
      </div>
    </div>
  )
}
const two= css`
 padding:10px;
 display:block;
 flex:4;
`
const main = css`
  display:flex;
`

const map = css`
  padding: 10px;
  display:block;
  flex:8;
`
const form = css`
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  padding: 0px 10px 10px 0px;
  height:438px;
`

export default Location;

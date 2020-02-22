import React from "react"
import { css } from "@emotion/core"

const Title = props => {
  return <div css={titleabc}>{props.title}</div>
}

export default Title

const titleabc = css`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 530;
  color: #2e7d32;
  margin-bottom: 20px;
  text-transform: uppercase;
`



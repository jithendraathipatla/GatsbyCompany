import React from 'react';
import {css} from '@emotion/core';
import TitleComponent from '../Components/Title';

const ConfigurationComponent = (props) => {
    const dataweneed = props.data.map((item)=>{
        return item;
    })
    const displaying = () => {
        return dataweneed.map((items)=>{
            return items.map((item,i)=>{
                return (
                    <div key={i} css={tabelbody}>
                      <span>{item.bed}</span>
                       <span>{item.feet} in Sq.Ft</span>
                    </div>
                )
            })
        })
    }
    return (
        <div css={main}>
            <TitleComponent title={props.project}/>
           <div css={main_one}>
             <span>Unit Type</span>
             <span>Area in Sq.Ft</span>
            </div>
            <div css={main_two}>
              {displaying()}
            </div> 
        </div>
    );
};


const main = css`
  display:block;
  text-align:center;
  margin-bottom:30px;
`
const main_one = css`
  display:flex;
  text-align:center;
  margin:0px 30px;
  span{
      flex:6;
      text-align:center;
      background:green;
      color:white;
      padding:10px;
      border:2px solid #242424;
  }
  @media(max-width:600px){
    margin:0px 10px;
  }
`
const tabelbody= css`
  display:flex;
  margin:0px 30px;
  :nth-child(odd){
    background:#eeee;
  }
  :hover{
     cursor:pointer;
     background:#eeee;    
  }
  span{
    flex:6;
    text-align:center;
    color:black;
    padding:7px;
    border:1px solid #242424;
  }
  @media(max-width:600px){
    margin:0px 10px;
  }
`
const main_two = css`
  display:block;
`

export default ConfigurationComponent;
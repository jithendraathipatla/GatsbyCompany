import React from 'react';
import {css} from '@emotion/core';
import TitleComponent from '../Components/Title';
import ModalComponent from '../Components/Modal';
    
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
                           <span>{item.feet} in SQ.Ft</span>
                           <span>{item.money}</span>
                           <span><ModalComponent project={props.project} size={small} title="Know More"/></span>
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
                 <span>Approximate Price</span>
                 <span>Discount Price</span>
                </div>
                <div css={main_two}>
                  {displaying()}
                </div> 
            </div>
        );
    };
    
    const small = css`
    color: #fff;
    background: #9c27b0;
    border-color: #9c27b0;
    cursor: pointer;
    justify-content: center;
    background-size: 400% 400%;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    padding:2px 10px;
    text-align: center;
    white-space: nowrap;
    :hover{
      text-decoration:underline;
    }
    @media(max-width:600px){
      padding:2px;
    }
    `

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
          @media(max-width:600px){
            padding: 4px;
          }
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
   

import React from 'react';
import {css} from '@emotion/core';

const Search = (props) => {
    return (
        <form onSubmit={props.result} css={stylingform}>
         <input type="text" name="searchform" onChange={props.change} placeholder={props.place}/>
         <button css={medium}>Search</button> 
        </form>
    );
};

export default Search;

const medium = css`
  color: #fff;
  background: #9c27b0;
  border-color: #9c27b0;
  margin-left:20px;
  cursor: pointer;
    justify-content: center;
    padding: calc(.5em - 1px) 1em;
    text-align: center;
    white-space: nowrap;
    background-size: 400% 400%;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    @media(max-width:600px){
        margin-left: 5px;
    }
`

const stylingform = css`
 display:flex;
 display: flex;
 border: 1px solid #b446b3;
 margin: 20px 0px;
 padding:20px 10px;
 background:white;
 box-shadow:0 0 24px 0 rgba(0,0,0,.22);
 input{
     width:-webkit-fill-available;
     width: -webkit-fill-available;
     background-color: #fff;
     border-color: #dbdbdb;
     border-radius: 50px;
     color: #363636;
     -webkit-appearance: none;
     -webkit-align-items: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
     border: 1px solid #dbdbdb;
     border-radius: 4px;
     box-shadow: none;
     display: -webkit-inline-box;
     display: -webkit-inline-flex;
     display: -ms-inline-flexbox;
     display: inline-flex;
     font-size: 1rem;
     height: 1.5em;
     -webkit-box-pack: start;
     -webkit-justify-content: flex-start;
     -ms-flex-pack: start;
     justify-content: flex-start;
     line-height: 1.5;
     padding-bottom: calc(0.5em - 1px);
     padding-left: calc(0.75em - 1px);
     padding-right: calc(0.75em - 1px);
     padding-top: calc(0.5em - 1px);
     position: relative;
     vertical-align: top;
}
`
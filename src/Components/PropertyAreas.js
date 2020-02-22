import React,{useState, useEffect} from 'react';
import {css} from '@emotion/core';
import Title from '../Components/Title';
import BangaloreData from '../data';
import {Link} from 'gatsby';

const PropertyAreas = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
       setState(BangaloreData);
    }, [state]);
    const displayingData = () => {
      return state.map((item,i)=>{
          return(
              <div key={i} css={border}>
                <img src={item.image_icon} alt={item.name}/>
                <div style={{textAlign:"center"}}>
                <Link to={`./project/${item.redirect}`}><span css={propertyName}>{item.name}</span></Link>
                </div>
              </div>

          )
      })    
    }
    return (
        <div css={someimportant}>
         <div css={position}>
         <Title title="New Properties by Areas"/>
         <div css={secondimportant}>
         <span>Bangalore</span>
         <span>Chennai</span>
         <span>Mumbai</span>
         <span>Hyderabad</span>
         </div>
         </div>
         <div>
          <div sytle={{textAlign:"center"}}>
          <Title title="Properties"/>
          </div>
           <div css={aliginingPropertyNames}>{displayingData()}</div>      
         </div>      
        </div>
    );
};

export default PropertyAreas;


const someimportant = css`
 display:grid;
 grid-template-columns:3fr 9fr;
 justify-content: space-around;
 align-items: flex-start;
 :hover{
     cursor:pointer;
 }
`

const position = css`
position: -webkit-sticky;
align-self: flex-center;
position: sticky;
top:100px;
`

const secondimportant = css`
padding:0px 10px;
border-right:1px splid #eee;
span{
    display:block;
    text-align:center;
    padding:20px;
    border:1px solid #eeee;
}
`

const aliginingPropertyNames = css`
  margin:0px 10px;
  display:grid;
  grid-template-columns:3fr 3fr 3fr 3fr;
  grid-gap:20px;
  img{
      height:200px;
      width:250px;
  }
  div{
    color: #4a4a4a;
    :hover{
        transform:translateY(-1px);
        cursor:pointer;
    }
  }
`;

const propertyName = css`
 text-align:center;
 padding-top:5px;
 font-weight:500;
`

const border = css`
box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
padding-bottom:10px;
span{
    display:block;
}
`
import React,{useState, useEffect} from 'react';
import {css} from '@emotion/core';
import Title from '../Components/Title';
import BangaloreData from '../data';
import {Link} from 'gatsby';

const PropertyAreas = () => {
    const [state, setState] = useState(BangaloreData);
    const [city, setcity] = useState("Bangalore");
    useEffect(() => {
    }, [state]);

    const handelBangalore = () => {
      setcity("Bangalore")
      setState(BangaloreData);
    }

    const handelChennai = () => {
      setcity("Chennai")
      setState([])
    }

    const handelHyderabad = () => {
      setcity("Hyderabad")
      setState([])
    }

    const handelMumbai = () => {
      setcity("Mumbai")
      setState([])
    }

    const displayingData = () => {
      return state.map((item,i)=>{
          return(
             <div key={i} css={border}>
                <div css={image_container}>
                <img src={item.image_icon} alt={item.name}/>
                 <div css={price_top}>
                  <span>{item.startingPrice}</span>
                  <span>Onwards</span>
                 </div>
                </div>
                <div style={{textAlign:"center"}}>
                <Link to={`./featured/${item.redirect}`}><span css={propertyName}>{item.name}</span></Link>
                </div>
              </div>

          )
      })    
    }

    const ComingSoon = () => {
      return (
        <div css={coming}>
           <h1>Coming Soon</h1>
        </div>
      )
    }
    return (
        console.log(state),
        <div css={someimportant}>
         <div css={positionaa}>
         <Title title="New Properties by Areas"/>
         <div css={secondimportant}>
         <span onClick={handelBangalore}>Bangalore</span>
         <span onClick={handelChennai}>Chennai</span>
         <span onClick={handelMumbai}>Mumbai</span>
         <span onClick={handelHyderabad}>Hyderabad</span>
         </div>
         </div>
         <div>
          <div sytle={{textAlign:"center"}}>
          <Title title={`Properties in ${city}`}/>
          </div>
           <div css={aliginingPropertyNames}>{state.length === 0 ? ComingSoon() : displayingData()}</div>      
         </div>      
        </div>
    );
};

export default PropertyAreas;


const coming = css`
 text-align:center;
 h1{
   font-size:24px;
   color:red;
   font-weight:800px;
 }
`

const someimportant = css`
 display:grid;
 grid-template-columns:3fr 9fr;
 justify-content: space-around;
 align-items: flex-start;
 :hover{
     cursor:pointer;
 }
 @media(max-width:600px){
   display:block;
 }
`

const positionaa = css`
position: -webkit-sticky;
align-self: flex-center;
position: sticky;
top:100px;
@media(max-width:600px){
  top: 81px;
  z-index: 100;
  background:white;
}
`

const secondimportant = css`
padding:0px 10px;
border-right:1px splid #eee;
@media(max-width:600px){
  display:flex;
}
span{
    display:block;
    text-align:center;
    padding:20px;
    border:1px solid #eeee;
    @media(max-width:600px){
      padding: 8px;
      width: -webkit-fill-available;
      margin-bottom: 10px;
    }
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
      @media(max-width:600px){
        width: -webkit-fill-available;
      }
  }
  div{
    a{
      text-decoration:none;
      color:darkslategray;
    }
    color: #4a4a4a;
    :hover{
        transform:translateY(-1px);
        cursor:pointer;
        a{
          text-decoration:underline;
        }
    }
  }
  @media(max-width:600px){
    display: grid;
    grid-template-columns: 3fr;
  }
`;

const propertyName = css`
 text-align:center;
 font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    padding-bottom: 5px;
    text-align: center;
    padding-top: 7px;
    color: #9c27b0
 
`

const border = css`
box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
padding-bottom:10px;
background:#ffff;
span{
    display:block;
}
`

const image_container = css`
  position: relative;
 
`;


const price_top = css`
position: absolute;
top:0;
left:0;
background:rgba(0,0,0,0.8);
color:#ffff;
padding: 0.3rem .6rem .5rem;
border-bottom-right-radius:1rem;
font-size:.5rem;
text-align:center;
 span{
   color:white;
   :nth-child(1){
     font-size:0.7rem;
     font-weight:500;
   }
   :nth-child(2){
    font-size:0.6rem;
  }
 }

`
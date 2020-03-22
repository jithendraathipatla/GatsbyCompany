import React,{useState,useEffect} from 'react';
import '../GlobalStyle/main.css';
import NavBarAbc from '../Components/Navbar';
import Footerabc from '../Components/Foooter';
import {css} from '@emotion/core';
import Title from '../Components/Title';
import {Link} from 'gatsby';
import Modalcomponent from '../Components/Modal';
import Background from '../images/details-3.jpeg';
import HeroComponent from '../Components/Hero';
import NewLaunchedAbcd from '../NewLauncedData';
import {FaLocationArrow, FaBed} from 'react-icons/fa';
import InputSearchComponent from '../Components/Search';

const Kewlaunch = () => {

    const [state, setstate] = useState(NewLaunchedAbcd);

    useEffect(() => {
    }, [state]);

     
    const handelformsubmit= (e) => {
        let finalvalue = e.target.elements.searchform.value;
        e.preventDefault();
        console.log(finalvalue);
       let filteredvalue =  NewLaunchedAbcd.filter((item)=>{
           return item.filter === finalvalue;;
        })
        setstate(filteredvalue);
    }

    const handelInputChange = (e) => {
        if(e.target.value.length === 0){
            setstate(NewLaunchedAbcd)
        }
    }

    const displayingNewLaunch = () =>{
        console.log(state);
        return (state.map((item,i)=>{
            return(
                <div key={i} className="card">
                <div className="card-image image-container">
                <Link to={`/upcoming/${item.redirect}`}><img src={item.image_icon} alt="Placeholder image"/></Link>
              </div>
              <div className="card-content in-upcoming">
               <span>{item.name}</span>
              <FaLocationArrow className="upcoming-icon"/>
              <time dateTime="2016-1-1">{item.location}</time>
              <br/>
              <FaBed className="upcoming-icon"/>
              <time dateTime="2016-1-1">1,2 and 3 BHK's</time>
              <br/>
              <div className="upcoming-buttons">
              <Link to={`/newlaunch/${item.redirect}`}><button className="button is-small">more</button></Link>
              <div style={{marginTop:"5px"}}>
               <Modalcomponent title="Brochure" project={item.name} size={medium}/>
               </div>
              </div>
             </div>
              </div>
            )
        }))
    }

    const Loading = () => {
        return (
            <div css={stylingLoading}>
              Loading....
            </div>
        )
    }


    return (
        <div>
            <NavBarAbc/>
            <HeroComponent img={Background} quote1="Newly Launched Projects In" quote2="Bangalore"/>
            <div css={main}>
            <div>
            <div style={{textAlign:"center"}}>
            <Title title="New-Launch Properties in Bangalore"/>
            </div>
            <div>
            <div css={stickystyle}>
            <InputSearchComponent result={handelformsubmit} change={handelInputChange}/>
            </div>
            <div css={grids}>
           {state.length === 0 ?  Loading() : displayingNewLaunch()}
           </div>
           </div>
            </div>
           </div>
            <Footerabc/>
        </div>
    );
};

export default Kewlaunch;

const stickystyle = css`
 position:sticky;
 position: -webkit-sticky;
align-self: flex-center;
position: sticky;
top:85px;
`

const medium = css`
color: #fff;
background: #9c27b0;
border-color: #9c27b0;
cursor: pointer;
justify-content: center;
background-size: 400% 400%;
box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
padding:4px 15px;
text-align: center;
white-space: nowrap;
:hover{
    text-decoration:underline;
}
`


const main = css`
  display:block;
  margin:20px 60px;
  @media(max-width:600px){
  margin:20px;
  }
`

const grids = css`
  display:grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  grid-gap:20px;
  @media(max-width:600px){
    grid-template-columns:3fr;
}
`

const stylingLoading = css`
   text-align:center;
   padding:100px;
   font-size:1.5rem;
`
import React,{useEffect, useState} from 'react';
import  NavBarAbc from '../Components/Navbar';
import Footerabc from '../Components/Foooter';
import '../GlobalStyle/main.css';
import {css} from '@emotion/core'
import {Link} from 'gatsby';
import Background from '../images/details-4.jpeg';
import HeroComponent from '../Components/Hero';
import ReadytoMoveInData from '../ReadytoMoveData';
import {FaLocationArrow, FaBed} from 'react-icons/fa';


const Readytomove = () => {
    const [state, setstate] = useState([]);
    useEffect(() => {
       setstate(ReadytoMoveInData);
    }, [state]);

    const ReadytoMoveDisplay = () =>{
        return (state.map((item,i)=>{
            return(
                <div key={i} className="card">
                <div className="card-image image-container">
                <Link to={`/upcoming/${item.redirect}`}><img src={item.image_icon} alt="Placeholder image"/></Link>
              </div>
              <div className="card-content in-upcoming">
               <span>{item.name}</span>
              <FaLocationArrow className="upcoming-icon"/>
              <time datetime="2016-1-1">{item.location}</time>
              <br/>
              <FaBed className="upcoming-icon"/>
              <time datetime="2016-1-1">1,2 and 3 BHK's</time>
              <br/>
              <div className="upcoming-buttons">
              <Link to={`/upcoming/${item.redirect}`}><button className="button is-small">more</button></Link>
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
            <HeroComponent img={Background} quote1="Readyto Move_In Projects In" quote2="Bangalore"/>
            <div className="Normal_grid">
            <div className="grid_system">
            {state.length === 0 ?  Loading() : displayingupcoming()}
           </div>
           <div>
           Here form component will come
           </div>
           </div>
            <Footerabc/>
        </div>
    );
};

export default Readytomove;

const stylingLoading = css`
   text-align:center;
   padding:100px;
   font-size:1.5rem;
`
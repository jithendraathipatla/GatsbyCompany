import React,{useState,useEffect} from 'react';
import '../GlobalStyle/main.css';
import NavBarAbc from '../Components/Navbar';
import Footerabc from '../Components/Foooter';
import {Link} from 'gatsby';
import Background from '../images/details-3.jpeg';
import HeroComponent from '../Components/Hero';
import NewLaunchedAbcd from '../NewLauncedData';
import {FaLocationArrow, FaBed} from 'react-icons/fa';

const Kewlaunch = () => {
    const [state, setstate] = useState([]);
    useEffect(() => {
       setstate(NewLaunchedAbcd);
    }, [state]);

    const displayingNewLaunch = () =>{
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
    return (
        <div>
            <NavBarAbc/>
            <HeroComponent img={Background} quote1="Newly Launched Projects In" quote2="Bangalore"/>
            <div className="Normal_grid">
            <div className="grid_system">
             {displayingNewLaunch()}
           </div>
           <div>
           Here form component will come
           </div>
           </div>
            <Footerabc/>
        </div>
    );
};

export default Kewlaunch;


import React from 'react';
import '../GlobalStyle/main.css';
import NavBar from '../Components/Navbar';
import Footerabc from '../Components/Foooter';

const team = () => {
    return (
        <div>
            <NavBar/>
            <div className="aligining-team">
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
             
             <div className="image-container2">
             <div className="card">
             <h1>MD Saif</h1>
             <h2>Property Consultant at LivExcellence</h2>
            </div>
             </div>
             <div className="image-container3">
             </div>
             <div className="image-container1">
              <div className="card">
               <h1>Jithendra Kumar</h1>
               <h2>Desiginer and Devloper at LivExcellence</h2>
              </div>
             </div>
            </div>
            <Footerabc/>
        </div>
    );
};

export default team;

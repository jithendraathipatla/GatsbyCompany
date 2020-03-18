import React from "react";
import '../GlobalStyle/main.css';
import Navbarabc from '../Components/Navbar';
import Footer from '../Components/Foooter';
import HeroComponent from '../Components/Hero';
import Services from '../Components/services';
import mainImage from '../images/defaultBcg.jpeg';
import PropertybydifferentStates from '../Components/PropertyAreas';

export default () => {
    return(
        <div>
         <Navbarabc/>
          <HeroComponent img={mainImage} quote1="One stop Destination for your Home" quote2="Home"/>
          <PropertybydifferentStates/>
          <br/>
          <Services/>
          <Footer/>
        </div>
    )
}


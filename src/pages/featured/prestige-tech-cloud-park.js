import React from 'react';
import '../../GlobalStyle/main.css';
import HeroComponent from '../../Components/Hero';
import Layoutcomponent from '../../Components/Layout';
import FeaturedPropertyData from '../../data';
import OverviewComonent from '../../Components/overview';
import AmenitiesComponent from '../../Components/Amenities';
import ConfigurationComponent from '../../Components/ConfigurationComponent';
import PricingComponent from '../../Components/PricingComponent';
import LocationComponent from '../../Components/Location';




const Assertzmarq = () => {
    const dataweneed = FeaturedPropertyData.filter((item)=>{
        return item.redirect === "prestige-tech-cloud-park"
    });

 

    const overviewdata = dataweneed.map((item)=>{
        return {"area":item.landarea, "units": item.numberofunits, "floors": item.startingPrice, "towers": item.totalblocks, "var": item.unitvarients, "poss":item.possession, "loc":item.location}
    });
   
    const configurationdata = dataweneed.map((item)=>{
        return item.area;
    })

    const pricingdata = dataweneed.map((item)=>{
        return item.price
    })

    const mainImage = dataweneed.map((item)=>{
        return item.mainBanner;
    })

    const locationdata = dataweneed.map((item)=>{
        return item.map
    })


    return (
        <Layoutcomponent>
        <HeroComponent img={mainImage} quote1="Prestige-tech-cloud-park"/>
            <br/>
           <OverviewComonent project="Tech Cloud Park Overview" data={overviewdata}/>
           <hr/>
           <ConfigurationComponent project="Tech Cloud Park Configuration" data={configurationdata}/>
           <hr/>
           <AmenitiesComponent project="Tech Cloud Park Amenities"/>
           <hr/>
           <PricingComponent project="Tech Cloud Park Pricing" data={pricingdata}/>
           <hr/>
           <LocationComponent project="Tech Cloud Park Location" data={locationdata}/>
        </Layoutcomponent>
    );
};

export default Assertzmarq;
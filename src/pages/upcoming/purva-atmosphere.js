import React from 'react';
import '../../GlobalStyle/main.css';
import HeroComponent from '../../Components/Hero';
import Layoutcomponent from '../../Components/Layout';
import UpcomingPropertyData from '../../Upcomingdata';
import OverviewComonent from '../../Components/overview';
import AmenitiesComponent from '../../Components/Amenities';
import ConfigurationComponent from '../../Components/ConfigurationComponent';
import PricingComponent from '../../Components/PricingComponent';
import LocationComponent from '../../Components/Location';




const Atmosphere = () => {
    const dataweneed = UpcomingPropertyData.filter((item)=>{
        return item.redirect === "purva-atmosphere"
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
        <HeroComponent img={mainImage} quote1="Purva Atmosphere"/>
            <br/>
           <OverviewComonent project="Atmosphere Overview" data={overviewdata}/>
           <hr/>
           <ConfigurationComponent project="Atmosphere Configuration" data={configurationdata}/>
           <hr/>
           <AmenitiesComponent project="Atmosphere Amenities"/>
           <hr/>
           <PricingComponent project="Atmosphere Pricing" data={pricingdata}/>
           <hr/>
           <LocationComponent project="Atmosphere Location" data={locationdata}/>
        </Layoutcomponent>
    );
};

export default Atmosphere;
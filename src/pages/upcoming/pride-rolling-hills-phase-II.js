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




const RollingHills = () => {
    const dataweneed = UpcomingPropertyData.filter((item)=>{
        return item.redirect === "pride-rolling-hills-phase-II"
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
        <HeroComponent img={mainImage} quote1="Pride Rolling Hills Phase II"/>
            <br/>
           <OverviewComonent project="Rolling Hills Phase II Overview" data={overviewdata}/>
           <hr/>
           <ConfigurationComponent project="Rolling Hills Phase II Configuration" data={configurationdata}/>
           <hr/>
           <AmenitiesComponent project="Rolling Hills Phase II Amenities"/>
           <hr/>
           <PricingComponent project="Rolling Hills Phase II Pricing" data={pricingdata}/>
           <hr/>
           <LocationComponent project="Rolling Hills Phase II Location" data={locationdata}/>
        </Layoutcomponent>
    );
};

export default RollingHills;
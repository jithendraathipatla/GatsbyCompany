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




const Waterford = () => {
    const dataweneed = UpcomingPropertyData.filter((item)=>{
        return item.redirect === "prestige-waterford"
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
        <HeroComponent img={mainImage} quote1="Prestige Waterford"/>
            <br/>
           <OverviewComonent project="Waterford Overview" data={overviewdata}/>
           <hr/>
           <ConfigurationComponent project="Waterford Configuration" data={configurationdata}/>
           <hr/>
           <AmenitiesComponent project="Waterford Amenities"/>
           <hr/>
           <PricingComponent project="Waterford Pricing" data={pricingdata}/>
           <hr/>
           <LocationComponent project="Waterford Location" data={locationdata}/>
        </Layoutcomponent>
    );
};

export default Waterford;
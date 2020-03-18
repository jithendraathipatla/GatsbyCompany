import React from 'react';
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
        return item.redirect === "brigade-buena-vista"
    });

    console.log(dataweneed);

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
        return item.image_icon;
    })

    const locationdata = dataweneed.map((item)=>{
        return item.map
    })


    return (
        <Layoutcomponent>
        <HeroComponent img={mainImage} quote1="Brigade Buena vista"/>
            <br/>
           <OverviewComonent project="Buena Vista Overview" data={overviewdata}/>
           <hr/>
           <ConfigurationComponent project="Buena Vista Configuration" data={configurationdata}/>
           <hr/>
           <AmenitiesComponent project="Buena Vista Amenities"/>
           <hr/>
           <PricingComponent project="Buena Vista Pricing" data={pricingdata}/>
           <hr/>
           <LocationComponent project="Buena Vista Location" data={locationdata}/>
        </Layoutcomponent>
    );
};

export default Assertzmarq;
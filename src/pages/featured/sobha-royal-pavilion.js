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
        return item.redirect === "sobha-royal-pavilion"
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
        return item.image_icon;
    })

    const locationdata = dataweneed.map((item)=>{
        return item.map
    })


    return (
        <Layoutcomponent>
        <HeroComponent img={mainImage} quote1="Sobha Royal Pavilion"/>
            <br/>
           <OverviewComonent project="Royal Pavilion Overview" data={overviewdata}/>
           <hr/>
           <ConfigurationComponent project="Royal Pavilion Configuration" data={configurationdata}/>
           <hr/>
           <AmenitiesComponent project="Royal Pavilion Amenities"/>
           <hr/>
           <PricingComponent project="Royal Pavilion Pricing" data={pricingdata}/>
           <hr/>
           <LocationComponent project="Royal Pavilion Location" data={locationdata}/>
        </Layoutcomponent>
    );
};

export default Assertzmarq;
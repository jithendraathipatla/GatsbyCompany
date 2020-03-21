import React from 'react';
import '../../GlobalStyle/main.css';
import HeroComponent from '../../Components/Hero';
import Layoutcomponent from '../../Components/Layout';
import ReadyToMoveInData from '../../ReadytoMoveData';
import OverviewComonent from '../../Components/overview';
import AmenitiesComponent from '../../Components/Amenities';
import ConfigurationComponent from '../../Components/ConfigurationComponent';
import PricingComponent from '../../Components/PricingComponent';
import LocationComponent from '../../Components/Location';




const Sankya = () => {
    const dataweneed = ReadyToMoveInData.filter((item)=>{
        return item.redirect === "ozone-kns-oasis"
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
        <HeroComponent img={mainImage} quote1="Ozone KNS Oasis"/>
            <br/>
           <OverviewComonent project="KNS Oasis Overview" data={overviewdata}/>
           <hr/>
           <ConfigurationComponent project="KNS Oasis Configuration" data={configurationdata}/>
           <hr/>
           <AmenitiesComponent project="KNS Oasis Amenities"/>
           <hr/>
           <PricingComponent project="KNS Oasis Pricing" data={pricingdata}/>
           <hr/>
           <LocationComponent project="KNS Oasis Location" data={locationdata}/>
        </Layoutcomponent>
    );
};

export default Sankya;
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
        return item.redirect === "axis-aspirum"
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
        <HeroComponent img={mainImage} quote1="Axis Aspira"/>
            <br/>
           <OverviewComonent project="Aspira Overview" data={overviewdata}/>
           <hr/>
           <ConfigurationComponent project="Aspira Configuration" data={configurationdata}/>
           <hr/>
           <AmenitiesComponent project="Aspira Amenities"/>
           <hr/>
           <PricingComponent project="Aspira Pricing" data={pricingdata}/>
           <hr/>
           <LocationComponent project="Aspira Location" data={locationdata}/>
        </Layoutcomponent>
    );
};

export default Sankya;
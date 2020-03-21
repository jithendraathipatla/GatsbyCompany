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
        return item.redirect === "salarpuria-sattva-east-crest"
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
        <HeroComponent img={mainImage} quote1="Salarpuria Sattva East Crest"/>
            <br/>
           <OverviewComonent project="East Crest Overview" data={overviewdata}/>
           <hr/>
           <ConfigurationComponent project="East Crest Configuration" data={configurationdata}/>
           <hr/>
           <AmenitiesComponent project="East Crest Amenities"/>
           <hr/>
           <PricingComponent project="East Crest Pricing" data={pricingdata}/>
           <hr/>
           <LocationComponent project="East Crest Location" data={locationdata}/>
        </Layoutcomponent>
    );
};

export default Sankya;
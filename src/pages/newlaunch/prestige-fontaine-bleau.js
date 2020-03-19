import React from 'react';
import '../../GlobalStyle/main.css';
import HeroComponent from '../../Components/Hero';
import Layoutcomponent from '../../Components/Layout';
import NewlaunchPropertyData from '../../NewLauncedData';
import OverviewComonent from '../../Components/overview';
import AmenitiesComponent from '../../Components/Amenities';
import ConfigurationComponent from '../../Components/ConfigurationComponent';
import PricingComponent from '../../Components/PricingComponent';
import LocationComponent from '../../Components/Location';




const Sankya = () => {
    const dataweneed = NewlaunchPropertyData.filter((item)=>{
        return item.redirect === "prestige-fontaine-bleau"
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
        <HeroComponent img={mainImage} quote1="Prestige Fontaine Bleau"/>
            <br/>
           <OverviewComonent project="Fontaine Bleau Overview" data={overviewdata}/>
           <hr/>
           <ConfigurationComponent project="Fontaine Bleau Configuration" data={configurationdata}/>
           <hr/>
           <AmenitiesComponent project="Fontaine Bleau Amenities"/>
           <hr/>
           <PricingComponent project="Fontaine Bleau Pricing" data={pricingdata}/>
           <hr/>
           <LocationComponent project="Fontaine Bleau Location" data={locationdata}/>
        </Layoutcomponent>
    );
};

export default Sankya;
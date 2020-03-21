import React,{ useState } from "react";
import {css} from '@emotion/core';
import Title from "../Components/Title"
import Swimming from "../images/Aminities/swimming-pool.svg"
import Club from "../images/Aminities/house.svg"
import Child from "../images/Aminities/player.svg"
import Landscape from "../images/Aminities/sprout.svg"
import Secur from "../images/Aminities/royal-guard.svg"
import Bank from "../images/Aminities/atm.svg"
import Basket from "../images/Aminities/basketball.svg"
import Caft from "../images/Aminities/coffee.svg"
import Conven from "../images/Aminities/pet-shop.svg"
import Jogging from "../images/Aminities/race-track.svg"
import Lands from "../images/Aminities/path.svg"
import Meditation from "../images/Aminities/meditation.svg"
import Convention from "../images/Aminities/hall.svg"
import Piped from "../images/Aminities/valve.svg"
import Power from "../images/Aminities/battery.svg"
import Tennis from "../images/Aminities/tennis-court.svg"
import Wifi from "../images/Aminities/wifi.svg"

const Amenities = (props) => {
  const [state, setstate] = useState([
    {
      name: "Swimming Pool",
      img: Swimming,
    },
    {
      name: "Club House",
      img: Club,
    },
    {
      name: "Kid's Playing Area",
      img: Child,
    },
    {
      name: "Landscaped Garden",
      img: Landscape,
    },
    {
      name: "24/7 Security",
      img: Secur,
    },
    {
      name: "Bank/ ATM",
      img: Bank,
    },
    {
      name: "Basketball Court",
      img: Basket,
    },
    {
      name: "Cafeteria",
      img: Caft,
    },
    {
      name: "Convenience Store",
      img: Conven,
    },
    {
      name: "Jogging Track",
      img: Jogging,
    },
    {
      name: "Landscape",
      img: Lands,
    },
    {
      name: "Meditaion",
      img: Meditation,
    },
    {
      name: "Convention Hall",
      img: Convention,
    },
    {
      name: "Piped Gas",
      img: Piped,
    },
    {
      name: "Power Backup",
      img: Power,
    },
    {
      name: "Tennis Court",
      img: Tennis,
    },
    {
      name: "WiFi Facility",
      img: Wifi,
    },
    {
      name: "Garden",
      img: Lands,
    },
  ])

  const displayingAmenities = () => {
    return state.map((item, i) => {
      return (
        <div key={i} css={firstOne}>
          <img src={item.img} alt={item.name} width="30px" />
          <span>{item.name}</span>
        </div>
      )
    })
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Title title={props.project} />
      </div>
      <div css={Amenities_main}>{displayingAmenities()}</div>
    </div>
  )
}

const Amenities_main = css`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr 3fr 3fr;
  grid-gap: 20px 60px;
  padding: 20px 2px 20px 60px;
  margin-bottom:30px;
  img{
    border: 1px solid #ffff;
    padding: 10px;
    border-radius: 5%;
    color: blueviolet !important;
    box-shadow: 0px 0px 9px 1px rgba(208, 82, 210, 0.49);
  }
  @media(max-width:600px){
    grid-template-columns:3fr 3fr;
  }
`

const firstOne = css`
  span{
    padding-top:2px;
    display:block;
    color:black;
    font-size:17px;
  }
`

export default Amenities

import React, { useState } from "react";
import ProjectType from "../images/Aminities/house.svg";
import TotalLandArea from "../images/Aminities/mountain.svg";
import TotalUnits from "../images/Aminities/castle.svg";
import NumberOfFloors from "../images/Aminities/binary-code.svg";
import TotalTowers from "../images/Aminities/cityscape.svg";
import UnitVarients from "../images/Aminities/towel.svg";
import PossessionDate from "../images/Aminities/calendar.svg";
import Location from "../images/Aminities/location.svg";
import Title from "./Title"
import { css } from "@emotion/core"

const Overview = (props) => {
   const ProjectLandArea = props.data.map((item)=>{
     return item.area;
   })

   const ProjectUnits = props.data.map((item)=>{
     return item.units;
   })

   const ProjectPrice = props.data.map((item)=>{
     return item.floors;
   })

   const ProjectTowers = props.data.map((item)=>{
     return item.towers;
   })

   const ProjectVarients = props.data.map((item)=>{
     return item.var;
   })

   const ProjectPossession = props.data.map((item)=>{
     return item.poss;
   })

   const ProjectLocation = props.data.map((item)=>{
     return item.loc;
   })

  const [state, setstate] = useState([
    {
      main_title: "Project Type",
      sub_heading: "Residential Apartment",
      image: ProjectType,
    },
    {
      main_title: "Total Land Area",
      sub_heading: ProjectLandArea,
      image: TotalLandArea,
    },
    {
      main_title: "Total Units",
      sub_heading: ProjectUnits,
      image: TotalUnits,
    },
    {
      main_title: "Starting Price",
      sub_heading: ProjectPrice,
      image: NumberOfFloors,
    },
    {
      main_title: "Total Towers",
      sub_heading: ProjectTowers,
      image: TotalTowers,
    },
    {
      main_title: "Unit Varients",
      sub_heading: ProjectVarients,
      image: UnitVarients,
    },
    {
      main_title: "Possession Date",
      sub_heading: ProjectPossession,
      image: PossessionDate,
    },
    {
      main_title: "Location",
      sub_heading: ProjectLocation,
      image: Location,
    },
  ])

  const displayingOverview = () => {
    return state.map((item, i) => {
      return (
        <div key={i} css={properly}>
          <img src={item.image} alt={item.main_title} width="30px" />
          <div css={headings}>
            <span>{item.main_title}</span>
            <span>{item.sub_heading}</span>
          </div>
        </div>
      )
    })
  }
  return (
    <div css={media_main}>
      <div style={{ textAlign: "center" }}>
        <Title title={props.project} />
      </div>

      <div css={overview_main}>{displayingOverview()}</div>
    </div>
  )
}

const media_main= css`
  @media(max-width:600px){
    margin-top:0px;
  }
`
const overview_main = css`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  grid-gap: 20px;
  margin-left: 30px;
  margin-bottom:30px;
  padding: 10px 30px 10px 10px;
  img {
    border: 1px solid #ffff;
    padding: 10px;
    border-radius: 5%;
    color: blueviolet !important;
    box-shadow: 0px 0px 9px 1px rgba(208, 82, 210, 0.49);
  }
  div{
    @media(max-width:600px){
       text-align:center;
    }
  }
  @media(max-width:600px){
    display: grid;
    grid-template-columns: 3fr;
    margin-left: 10%;
    margin-right: 10%;
    padding:0px;
  }
`

const properly = css`
    display: flex;
    border-radius: 5px;
    padding: 10px 20px;
  @media(max-width:600px){
    margin-bottom:10px;
  }
`
const headings = css`
  padding-left: 20px;
  span {
    display: block;
    :nth-child(1) {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 5px;
    }
  }
`

export default Overview;

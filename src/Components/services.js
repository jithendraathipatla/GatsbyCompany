import React, { useState } from "react";
import Title from "./Title";
import {css} from '@emotion/core';
import { FaRegHandshake, FaCarSide, FaMailBulk, FaSearchengin, FaResearchgate, FaRev } from "react-icons/fa";
import { DiGoogleAnalytics } from 'react-icons/di';
import {MdRateReview} from 'react-icons/md';


const Services = () => {
  const [state, setstate] = useState([
    {
      icons: <FaRegHandshake />,
      title: "Appointment",
      info: "We feel like our Customers are the most important assert in the whole universe. So, \"making our customers feel happ is wat makes us more Happy\"."
    },
    {
      icons: <FaCarSide />,
      title: "Making appointments",
      info: "We have a dedicated team of individuals who will be assiting our Clients while Vising the Property. We share our insights on the Property to our Clients with Happiness."
    },
    {
      icons: <FaMailBulk />,
      title: "Sharing The details",
      info: "Once a site-vist or appointment with the client is done, we share all the necessary documents to our client to a have a good overviewon the Property that he/she is going to visit."
    },
    {
      icons: <MdRateReview />,
      title: "Review",
      info: "We review the each and every property and write down the best it offers. We maintain a database of all the property information with the best a property has to offer."
    },
    {
      icons: <FaSearchengin />,
      title: "Research",
      info: "Our tem is composed of a talanted Realestate experts. These guys also help our customers where they will get huge discounts and offers."
    },
    {
      icons: <FaResearchgate />,
      title: "Reserach on sales",
      info: "Research on sale is an import factor,we do it often because it helps us to fisout the best Properties which are available for best prices."
    },
    {
      icons: <FaRev />,
      title: "Reviews On Properties",
      info: "Whatever the property maybe, we do an indepth analysis on it and we will give reviews on each and every Property that you will ask for."
    },
    {
      icons: <DiGoogleAnalytics />,
      title: "Comparable Market Analysis",
      info: "We at Livexcellence follow a strategy, where we analyze the present market trend and maintain a list of best properties."
    },

  ]);

  const display = () => {
    return state.map((item, i) => {
      return (
        <div key={i} css={third}>
        <div style={{textAlign:"center"}}>
        <span>{item.icons}</span>
        <span css={main}>{item.title}</span>
        </div>
        <span css={sub}>{item.info}</span>
        </div>
        
      );
    });
  };
  return (
    (
      <div >
        <Title title="Our Services" />
        <div css={services}>{display()}</div>
      </div>
    )
  );
};

export default Services;



const services = css`
margin:20px;
display:grid;
grid-template-columns: 3fr 3fr 3fr 3fr;
padding-bottom:20px;
svg{
    font-size:2.3rem;
    color:#9c27b0;
    padding-top:10px
}
.h1{
    font-size:1.1rem;
}
`;

const main= css`
  font-size:1.2rem;
  font-weight:500;
  display:block;
  padding-left:20px;
`;

const sub= css`
  font-size:1.1rem;
  display:block;
  text-align:justify;
  padding-top:10px;
`

const third = css`
    border:1px solid #eeee;
    padding:15px 10px;
    :nth-child(1){
        background:#eeee;
    }
    :hover{
      background:#eeee;
    }
`
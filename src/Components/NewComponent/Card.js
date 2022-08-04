import React from "react";
import CardItem from "./CardItem";
import SeriesData from "./SeriesData";
//for each component has one unique id which is used as key
 const Card=()=>{
     return(<>
        <h1>Top 6 Netflix Series</h1>
        {SeriesData.map(val=>(
            <CardItem
            key={val.id}
            link={val.link}
            sname={val.sname}
            imgsrc={val.src}  
            title={val.title}
            />  
           )
           )}
   </> );
 }
export default Card;

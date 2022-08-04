import React from "react";
function CardItem(props){
    // console.log(props);
    return (<>
        <div className='cards'>
            <div className='card'>
               <img src={props.imgsrc} alt="My-pic" className='' />
            <div className='card_info'>
                <span className='card_category'>{props.title}</span>
                <h3 className='card_title'>{props.sname}</h3>
                <a href={props.link} target="__blank">
                    <button> Watch Now</button>
                </a>
               </div>
            </div>
        </div>
    </>);
}
export default CardItem;
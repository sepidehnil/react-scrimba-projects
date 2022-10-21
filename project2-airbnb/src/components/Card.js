import React from 'react'

 //for the example in the my App.js file i should use like this {props.info.rating}
 //for image i should write prpos.info.coverimg beacuse in our data file we have coverimg 
 //or for rating  i should write props.info.stats.rating


export default function Card(props){
    var badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.country === "Online") {
        badgeText = "ONLINE"
    }
    
    return(
        <div className='card'>
            {badgeText && <div className='card-badges'>{badgeText}</div>}
            <img src={props.img} className='card-logo'></img>
            <div className='card--stats' >
                <img src='./Star 1.png' className='star-logo'></img>
                <span className='gray'>{props.rating}</span>
                <span className='gray'>({props.reviewCount})•</span>
                <span className='gray'>{props.country}</span>
            </div>
                <p className='para'>{props.title}</p>
                <p className='para'><span className='bold'>From ${props.price}</span><span> / person</span></p>
        </div>


    )
}
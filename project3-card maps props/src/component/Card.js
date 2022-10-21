import React from 'react'



export default function Card(props){
    return(
        <div className='main'>
            <img src={props.info.img} className='card-img'></img>
            <div className='container'>
            <img src='./Fill 219.png' width="7px" height="9.55px"></img>
            <span>{props.info.location}</span><a href={props.info.googlemapurl}><span className='map'>View on Google Maps</span></a>
            <h1>{props.info.title}</h1>
            <div>{props.info.date}</div>
            <div>{props.info.description}</div>
            </div>
            
        </div>
    )
}
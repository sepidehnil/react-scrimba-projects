import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './Data'


//export default function App() {       // i can add this app instead of app below and delete
                                          //all of props and in the file on card compnent use props.info.country
  //var cardinfo = Data.map(function(info){
    //return <Card 
   // info ={info}
    //key={info.id}

  ///>



export default function App() {
  var cardinfo = Data.map(function(info){
    return <Card 
    key={info.id}
    img={info.coverImg}
    rating={info.stats.rating} 
    reviewCount={info.stats.reviewCount} 
    country={info.location} 
    title={info.title} 
    price={info.price} 
    openSpots={info.openSpots}
    />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      {cardinfo}
  
    </div>
    
  );
}


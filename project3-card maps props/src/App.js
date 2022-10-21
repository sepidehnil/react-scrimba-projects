import React from 'react'
import Navbar from './component/Navbar'
import Data from './Data'
import Card from './component/Card'


export default function App() {
  var cardelements = Data.map(function(info){
    return <Card 
    key={info.id}
    info={info}
    />

  })
  return(
    <div>
      <Navbar />
      {cardelements}
    </div>
  )

}



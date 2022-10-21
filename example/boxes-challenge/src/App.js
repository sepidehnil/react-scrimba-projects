import React from 'react'
import boxes from './boxes';
import Box from './component/Box';

export default function App() {
  var [boxeschallenge , setboxes] = React.useState(boxes)
  function toggle(){
    console.log("clicked")
  }
  var boxesarray = boxeschallenge.map(function(info){
    return(
      <Box 
      key={info.id} 
      on={info.on} 
      toggleclick={toggle}/>
    )
  })
  return (
    <main>
      {boxesarray}
    </main>
  );
}



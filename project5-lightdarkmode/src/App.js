import React from 'react'
import Main from './component/Main';
import Navbar from './component/Navbar';

export default function App() {
  var [lightMode , setlightMode ] = React.useState(false)
  function togglelightMode(){
    setlightMode(prevMode => !prevMode)
    }
  return (
    <div className='container'>
      <Navbar 
      lightMode={lightMode}
      togglelightMode={togglelightMode}
      />
      <Main 
      lightMode={lightMode}
      />
    </div>
  )
}


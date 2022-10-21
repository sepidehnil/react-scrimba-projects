
// EXAMPLE1:

import React from 'react'

export default function Box(props){
    var [squares , setsquare] = React.useState(props.on)
    function handleclick(){
        setsquare(function(prevsquare){
            return prevsquare ? false : true

        })
        
    }
    var styles = {
        backgroundColor : squares ? "#222222" : "transparent"
    }

    return(
        <div className='box' style={styles} onClick={handleclick}></div> //onClick={toggleclick}
    )
}

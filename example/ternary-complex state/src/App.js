import React from 'react'

/**example1:
 
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     /
    var [isGoingOut , goingout] = React.useState(true)
    function handleclick(){
        goingout(function(oldValue){   //or goingout(oldvalue => oldValue ? false : true  )
           return oldValue ? false : true  
 
        })
        
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={handleclick}>
                <h1>{isGoingOut ? "yes" : "no"}</h1>
            </div>
        </div>
    )
}
*/

//example2:

export default function App() {
      /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    //const thingsArray = ["Thing 1", "Thing 2"]

    var [thingsArray , newarry] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        // We'll work on this next
        // const newThingText = `Thing ${thingsArray.length + 1}`
        // thingsArray.push(newThingText)
        // document.getElementById()
        // console.log(thingsArray)

        newarry(function(oldValue){  
          return [...oldValue, `Thing ${oldValue.length + 1}`]    //.push isnt correct here
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}


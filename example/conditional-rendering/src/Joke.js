import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
     var [isshown , setisshown] = React.useState(false)
     function toggle(){
        setisshown(function(previsshown){
            console.log(isshown)
            return(
                previsshown ? false : true
            )
            
        })

     }

    return (
        <div>
            <h1>{props.info.setup}</h1>
            {isshown === true && <p>{props.info.punchline}</p>}
            <button onClick={toggle}>click here</button>
            <hr/>
  
        </div>
    )
}
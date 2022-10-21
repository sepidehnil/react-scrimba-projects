import React from 'react'

export default function Joke(props){
    return(
        <div>
            <div>{props.setup}</div>
            <div>{props.punchline}</div>
        </div>
    )
}
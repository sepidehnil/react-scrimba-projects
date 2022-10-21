import React from 'react'
import Joke from './Joke';
import jokedata from './jokedata';

export default function App() {
  var jokeelements = jokedata.map(function(info){
    return(
      <Joke 
      key={info.id}
      info={info}
      />
    )
  })
  return (
    <div>
    {jokeelements}
    </div>
  
  );
}


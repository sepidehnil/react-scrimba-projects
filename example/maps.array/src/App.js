import React from 'react'
import Joke from './Joke'
import Jokedata from './Jokedata';


export default function App() {
  var jokeelemets = Jokedata.map(function(joke){
    return <Joke setup = {joke.setup} punchline = {joke.punchline} />

  })
  return (
  <div>
    {jokeelemets}
  </div>

  );
}



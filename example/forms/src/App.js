import React from 'react'

export default function App() {
  var [firstname, setfirstname] = React.useState("")
  var [lastname, setlastname] = React.useState("")
        /**
         * Challenge1: update the firstName state on every keystroke
         * Challenge2: Track the applicant's last name as well
         * another way for this example in App2 
         * 
         */
  console.log(firstname , lastname)
  

  function handlefirstchange(event){
    setfirstname (
      console.log (event.target.value)
    )
  }
  function handlelasnamechange(event){
    setlastname ( 
      console.log (event.target.value)
    )
  }
  
  
  return (
    <form>
      <input type="text" placeholder='firstname' onChange={handlefirstchange}></input>
      <input type="text" placeholder='lastname'  onChange={handlelasnamechange}></input>
    </form>

  );
}



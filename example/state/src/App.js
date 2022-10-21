import React from 'react'
//setisimportant is a function that updates value.
//two examplein on 


//export default function App() {
  //var [result , setisimportant] = React.useState('yes')
  //console.log(result)
  //function handleclick(){
    //setisimportant('no')
  //}
  //return (
    //<div className="state">
        //<h1 className="state--title">Is state important to know?</h1>
        //<div onClick={handleclick} className="state--value">
            //<h1>{result}</h1>
        //</div>
    //</div>
//)
//}


//exampl2 style:index2.css
export default function App() {
  var [result , counter] = React.useState(0)

//another way:
//function handeleclick(){
  //counter (function(oldValue){ or counter (precounter => precounter +1
    //return (oldValue +1)
  //})
//}

  function handelclick(){
    counter(result+1)
    
  }
  function minushandle(){
    counter(result-1)
  }

  return (
      <div className="counter">
          <button className="counter--minus" onClick={minushandle}>–</button>
          <div className="counter--count">
              <h1>{result}</h1>
          </div>
          <button onClick={handelclick} className="counter--plus">+</button>
      </div>
  )
}


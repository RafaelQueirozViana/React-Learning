import React from "react";

const App = () => {

  const [count, setCount] = React.useState(0);
  const title = <h1>This is a title!</h1>
  const isAvailable = true;

  const car = {
    model: 'hb20',
    year: 2018
  }

  const getName = (sobrenome) =>{
    return "Pedro " + sobrenome;
  }


  return (
    <>
  {title}

    <h1>{count}</h1>
    <p>{isAvailable ? "it's" : "it isn't"}</p>
    <p>{Math.random() * 100}</p>
    <p>{getName("lucas")}</p>
    <p>{new Date().getFullYear()}</p>
    <p>{car.year}</p>
  </>
  )
}

export default App

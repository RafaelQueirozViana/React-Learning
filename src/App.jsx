import React, { useEffect } from "react";


const App = () => {
  const [likes, setLikes] = React.useState(0);
  const [input, setTypedInput] = React.useState("no");

  const handleLikes = () => {
    setLikes(likes + 1);
  }

  const handleInput = ({target}) => {
    setTypedInput(target.value)
  }


  useEffect(() => {
    if(likes > 10) {
      console.log("Congratulations, you reached to " + likes + " likes!")
    }

    if(input.length >= 5) {
      console.log("you exceed the maximum length of the input!")
    }
  }, [likes,input]);

  useEffect(() => {
   console.log("Welcome to my webstite!") 
  }, []);

   

  return (
    <>
    <div className="likes-container">
     <p>Likes quantity: {likes}</p>
     <button onClick={handleLikes}>Give Like</button>

    </div>

    <div className="input-container">
      <p>What did you type in the input: {input} </p>
      <input onInput={handleInput} type="text"  / >
    </div>
  

    </>
  );
};

export default App;

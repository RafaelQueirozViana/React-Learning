import React from "react";


const App = () => {
  const [likes, setLikes] = React.useState(0);
  const [typedInput, setTypedInput] = React.useState("Nothing");

  const handleLikes = () => {
    setLikes(likes + 1);
  }

  const handleInput = ({target}) => {
    setTypedInput(target.value)
  }
   

  return (
    <>
    <div className="likes-container">
     <p>Likes quantity: {likes}</p>
     <button onClick={handleLikes}>Give Like</button>

    </div>

    <div className="input-container">
      <p>What did you type in the input: {typedInput} </p>
      <input onInput={handleInput} type="text" placeholder={typedInput} / >
    </div>
  

    </>
  );
};

export default App;

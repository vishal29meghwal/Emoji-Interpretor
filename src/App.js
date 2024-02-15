import logo from './logo.svg';
import React, {useState} from "react";
import ReactDOM from 'react-dom';
import "./style.css";

const emojiDictionary = {
 "🙂" : "Acha",
 "😍" : "wow",
 "🤭" : "hehehe",
 "😏" : "Achaaaw"
};


function App() {
  const [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event){

    var meaning = emojiDictionary[event.target.value]; 
    if(meaning === undefined){
      meaning  = "We don't have this in database";
    }
    
    setMeaning(meaning);

}

  function emojiClickHandler(emoji){
      var meaning = emojiDictionary[emoji]; 
      setMeaning(meaning);
  }

  return (
      <div className="App">
          <h1>Emoji interpretor</h1>
          <input 
          onChange = {emojiChangeHandler}
          placeholder = "Enter an emoji"
          style = {{padding : "0.5rem" , fontSize : "1rem"}}
          />

          <h3>{meaning}</h3>
          <h3>Emoji we know</h3>
              {
                  Object.keys(emojiDictionary).map(function(emoji){
                      return (
                          <span 
                          onClick={() => emojiClickHandler(emoji)}
                          style = {{padding : "1rem" , fontSize : "2rem", cursor : "pointer"}}
                          key = {emoji}
                          >
                          {emoji}
                          </span>

                  )
              })}
      </div>
      )
}

export default App;

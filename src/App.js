import React from "react";
import { useState } from "react";
import "./App.css";
import Add from "./components/items";

function App() {
  const [placehold, setPlacehold]=useState("Enter Activity") 
  const [newItem, setNewItem] = useState("");
  const [activityArr, setActivityArr] = useState([]);
  const [off, setOff]=useState(true)
  const inputHandler = (event) => {
   
    setNewItem(event.target.value);
  };

 
  const addHandler = (event) => {
    event.preventDefault()
   
    if (newItem === "") {
      return;
    }
     else {
      //const add = new Array(activityArr.push(...newItem));
      setActivityArr((curArr) => [...curArr,newItem]);
        
    setPlacehold("Enter Activity")
    setNewItem("");     };
    
    setNewItem("");
        };

  return (
    <span>Todo
      <input type="text"  id="theText"  value={newItem} onChange={inputHandler} />
      <Add 
      activityArr={activityArr} 
      addHandler={addHandler} />
    </span>
  );
}
export default App;

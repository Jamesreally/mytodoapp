import React from "react";
import { useState } from "react";
import { Item } from "./components";
import { randy } from "./utils/conversion";

function App() {
  const [newItem, setNewItem] = useState("");
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState("")
  const [showError, setShowError] = useState(false)
  
  
  const inputHandler = (e) => {
    setNewItem(e.target.value);
  };

 
  const addItem = (e) => {
    e.preventDefault()
   
    if (newItem === "") {
      setShowError(true)
      setErrors("Required**")
      return;
    }

    let dataItem = {
      id: randy(),
      name: newItem,
    }

    if (data.length === 0) {
      data.push(dataItem)
      setNewItem("")
    }

    else {
      const findItem = data.find((item) => (item.name === dataItem.name) || (item.id === dataItem.id)) 
      if (findItem) {
        setShowError(true)
        setErrors("name taken, choose another one")
        return;
      }
      else {
        setData((curArr) => [...curArr,dataItem])
      }
    }
    
    setErrors("")
    setShowError(false)
    setNewItem("");    
  };

  return (
    <div className="main-container">
      <h1 className="title">My Todo List</h1>
      <div className="container">
        <p className="errors">{errors}</p>
        <input
          type="text"
          className="input-field"
          value={newItem}
          onChange={inputHandler}
          style={{ border: `${showError ? "1px solid crimson" : ""}` }}
        />
      </div>
      <Item data={data} addItem={addItem} setData={setData} setNewItem={setNewItem} newItem={newItem} setErrors={setErrors} setShowError={setShowError} />
    </div>
  );
}
export default App;

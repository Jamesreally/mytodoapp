import React, {useState} from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Add = ({ data, addItem, setData, setNewItem, newItem, setErrors, setShowError }) => {
  const [edit, setEdit] = useState(false)
  const [getId, setGetId] = useState("")

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      addItem(e);
    }

  }
 
  const deleteItem = (chosenId) => {
      let newValue = [];
      if (newValue.length === 0) {
        const delValue = data.filter((item) => item.id !== chosenId);
        newValue = delValue;
        setData(newValue)
      }
      return newValue
  };

  const editItem = (chosenId) => {
    setEdit(true)
    const findItem = data.find(
      (item) => item.id  === chosenId
    ); 

    if (findItem) {
      setNewItem(findItem.name);
      setGetId(findItem.id)
    }

  }

  const handleEdit = () => {
    const checkNameExist = data.find((item) => item.name === newItem);

    if (checkNameExist) {
      setErrors("Name already exist")
      setShowError(true)
      return;
    }
    
    else {
      const findIndex = data.findIndex((item) => item.id === getId);
      
      data[findIndex] = {
        id: getId,
        name: newItem,
      };

      setData(data);
      
      setErrors("");
      setShowError(false);
      setEdit(false);
      setNewItem("");
    }
  }

  const handleSubmit = (e) => {
    if (edit) {
      handleEdit(e)
    }

    else {
      addItem(e)
    }
  }

  


  return (
    <div>
      <div className="btn-container">
        <button
          className="btn"
          onClick={handleSubmit}
          onKeyDown={handleKeyPress}
          onKeyDownCapture={handleKeyPress}
        >
          {`${edit ? "Edit" : "Add"}`}
        </button>
        <p></p>
      </div>

      <div className="contianer">
        {data.map((item, i) => (
          <div key={item.id} className="section">
            <h1 className="item">
              {i + 1} - {item.name}
            </h1>
            <div className="edit-delete">
              <button
                onClick={() => deleteItem(item.id)}
                className="delete-btn"
              >
                <MdDelete />
              </button>
              <button onClick={() => editItem(item.id)} className="edit-btn">
                <FaEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Add;

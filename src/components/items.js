import React, { Fragment } from "react";

const Add = ({ newItem, activityArr, addHandler }) => {
 
  const delHandler = (idx) => {
    if (!idx) {
      alert("error ");
      return;
    } 
    else {
      let newValue = [];
      const delValue = itemList.filter((item) => item.idx !== idx);
      newValue = delValue;
    }

    //item.splice(idx,1)
    console.log("i clicked an item" + itemList.idx);
  };
  const itemList = activityArr.map((item, idx) => (
    <li onClick={delHandler} key={idx} id={idx}>
      {item}
    </li>
  ));
  console.log(itemList);

  return (
    <div>
      <span>
        <button onClick={addHandler}>Add</button>
      </span>

      <div>
        <ol>{itemList}</ol>
      </div>
    </div>
  );
};
export default Add;

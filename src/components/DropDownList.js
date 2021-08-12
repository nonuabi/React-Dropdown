import React from "react";
import "../css/DropDownList.css";
const DropDownList = (props) => {
  const itemList = ["Mouse", "Keyboard", "Monitor"];
  return (
    <div className="DropDownList" onMouseLeave={props.handleCheck}>
      <ul className="item_list_container" onClick={props.handleCheck}>
        {itemList.map((item, index) => {
          return (
            <li className="item_list" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default DropDownList;

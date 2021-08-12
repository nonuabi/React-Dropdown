import React, { useState, useEffect } from "react";
import DropDownList from "./DropDownList";

const ShowDropDown = (props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(props.check);
  }, [props.check]);
  return (
    <div onMouseLeave={props.handleCheck}>
      {show && <DropDownList handleCheck={props.handleCheck} />}
    </div>
  );
};

export default ShowDropDown;

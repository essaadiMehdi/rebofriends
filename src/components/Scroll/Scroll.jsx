import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{ height: "800px", overflow: "scroll", border: "1px solid red" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

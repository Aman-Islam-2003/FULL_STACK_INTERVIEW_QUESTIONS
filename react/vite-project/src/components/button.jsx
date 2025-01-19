import React from "react";

const Button = ({ onClick }) => {
  console.log("button component");
  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default React.memo(Button);

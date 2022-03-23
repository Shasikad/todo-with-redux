import React from "react";

const Todo = ({ text, complete, onClick }) => {
  return (
    <div>
      <checkbox onClick={onClick} />
      <li style={{ textDecoration: complete ? "line-through" : "none" }}>
        {text}
      </li>
    </div>
  );
};

export default Todo;

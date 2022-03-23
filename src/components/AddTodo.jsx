import React from "react";

const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = (e) => {
    if (input.value.trim() !== "") {
      console.log("added");
    }
  };
  return (
    <>
      <input type="text" ref={(node) => (input = node)} />
      <button type="submit" onClick={onClick}>
        Add Todo
      </button>
    </>
  );
};

export default AddTodo;

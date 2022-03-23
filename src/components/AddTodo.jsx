import React from "react";
import { addTodo } from "./actions";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = (e) => {
    if (input.value.trim() !== "") {
      dispatch(addTodo(input.value.trim()));
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

export default connect()(AddTodo);

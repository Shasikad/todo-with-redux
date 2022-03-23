import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Button from "../components/Button";

const App = () => (
  <div>
    <h1>TodoList</h1>
    <AddTodo />
    <TodoList />
    <div>
      <Button filter={"SHOW_ALL"}>All</Button>
      <Button filter={"SHOW_ACTIVE"}>Active</Button>
      <Button filter={"SHOW_COMPLETE"}>Complete</Button>
    </div>
  </div>
);

export default App;

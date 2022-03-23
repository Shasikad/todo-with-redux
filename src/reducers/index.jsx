import { combineReducers } from "redux";
import todos from "./todo.reducer";
import filterTodo from "./filter";

export default combineReducers({
  todos,
  filterTodo
});

import { combineReducers, createStore } from "redux";
import { todos } from "./cusmoner";

let rootReduce = combineReducers({
  todos: todos,
});

export let store = createStore(rootReduce);

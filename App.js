import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function App() {
  return (
    <div className="todo-form">
      <div className="todo-app">
        <h1>TodoList</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    </div>
  );
}

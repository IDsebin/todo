import React from "react";
import { useRecoilValue } from "recoil";

import Todo from "./Todo";
import { filteredTodoListState } from "../store/todoStore.js";

function TodoList() {
  const todos = useRecoilValue(filteredTodoListState);

  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "할 일 추가"}
    </ul>
  );
}

export default TodoList;
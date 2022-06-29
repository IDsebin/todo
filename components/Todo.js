import React from "react";
import cx from "classnames";
import useTodoActions from "../hooks/useTodoActions";

function Todo({ todo }) {
  const { toggleTodo } = useTodoActions();

  return (
    <li className="todo-item" onClick={() => toggleTodo(todo)}>
      {todo && todo.completed ? "✔" : "❌"}{" "}
      <span className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
}

export default Todo;

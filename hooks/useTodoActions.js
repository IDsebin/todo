import { useSetRecoilState } from "recoil";

import { todoListState } from "../store/todoStore.js";

let nextTodoId = 0;

export default function useTodoActions() {
  const todoDispatch = useSetRecoilState(todoListState);

  return {
    addTodo: (text) =>
      todoDispatch({
        type: "add",
        payload: { id: ++nextTodoId, content: text }
      }),

    toggleTodo: (todo) =>
      todoDispatch({
        type: "replace",
        payload: {
          oldElement: todo,
          newElement: { ...todo, completed: !todo.completed }
        }
      })
  };
}

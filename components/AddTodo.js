import React from "react";
import useTodoActions from "../hooks/useTodoActions";

function AddTodo() {
  const { addTodo } = useTodoActions();
  const [text, setText] = React.useState("");

  const handleSubmit = React.useCallback(
    (evt) => {
      evt.preventDefault();
      addTodo(text);
      setText("");
    },
    [text, setText, addTodo]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input required value={text} onChange={(e) => setText(e.target.value)} />
      <button className="add-todo" type="submit">
        추가
      </button>
    </form>
  );
}

export default AddTodo;
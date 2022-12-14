import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (!newTodo.text) {
      return;
    }
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue) {
      return;
    }
    const newTodos = todos.map((item) =>
      item.id === todoId ? newValue : item
    );
    setTodos((prev) => {
      prev.map((item) => (item.id === todoId ? newValue : item));
    });
  };

  return (
    <header>
      <h1>Task list</h1>
      <TodoHeader addTodo={addTodo} />
      <br />
      <hr />
      <br />
      <br />
      <TodoBody todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </header>
  );
}

import { List } from "@material-ui/core";
import React from "react";
import Todo from "../Todo/Todo";
import useStyle from "./styles";

const TodoList = ({ todos, setInput, setUpdating, addTodo }) => {
  const classes = useStyle();
  return (
    <List dense={false} className={classes.list}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          addTodo={addTodo}
          setUpdating={setUpdating}
          setInput={setInput}
        />
      ))}
    </List>
  );
};

export default TodoList;

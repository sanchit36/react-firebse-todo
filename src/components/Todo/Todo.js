import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React from "react";
import { db } from "../../firebase";
import useStyle from "./styles";

function Todo({ todo, setInput, setUpdating, addTodo }) {
  const classes = useStyle();
  const handleUpdate = (event, todo) => {
    setInput(todo.text);
    setUpdating(todo.id);
  };

  return (
    <ListItem
      dense
      button
      className={`${classes.item} ${todo.isCompleted && classes.strike}`}
      onClick={() =>
        db
          .collection("todos")
          .doc(todo.id)
          .update({ isCompleted: !todo.isCompleted })
      }
    >
      <ListItemText primary={todo.text} />
      <ListItemSecondaryAction>
        <IconButton
          onClick={(e) => {
            handleUpdate(e, todo);
          }}
          edge="end"
          aria-label="update"
        >
          <Edit />
        </IconButton>
        <IconButton
          onClick={() => db.collection("todos").doc(todo.id).delete()}
          edge="end"
          aria-label="delete"
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;

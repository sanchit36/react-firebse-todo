import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import firebase from "firebase";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [updating, setUpdating] = useState(null);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    if (updating === null) {
      db.collection("todos").add({
        text: input,
        isCompleted: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } else {
      db.collection("todos").doc(updating).update({
        text: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setUpdating(null);
    }
    setInput("");
  };

  return (
    <div className="app">
      <h1 className="app__header">Todo App</h1>
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList
        addTodo={addTodo}
        setInput={setInput}
        setUpdating={setUpdating}
        todos={todos}
      />
    </div>
  );
}

export default App;

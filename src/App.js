import React from "react";
import Header from "./components/header";
import TodoList from "./components/to-do list";
import AddTodo from "./components/add-to-do";

function App() {
  return (
    <React.Fragment>
      <Header />
      <AddTodo />
      <TodoList />
    </React.Fragment>
  );
}

export default App;

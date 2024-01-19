import React from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import ShowTodo from "./components/ShowTodo";
import { Stack } from "@mui/material";

const App = () => {
  return (
    <Stack direction="column" spacing={4}>
      <AddTodoForm />
      <ShowTodo />
    </Stack>
  );
};

export default App;

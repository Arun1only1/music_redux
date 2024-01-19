import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetTodoList } from "../store/slice/todoSlice";

const ShowTodo = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);

  console.log(todoList);
  return (
    <div>
      {todoList.map((item, index) => {
        return (
          <Typography key={index} variant="h6">
            {item.title}
          </Typography>
        );
      })}

      <Button
        variant="contained"
        color="warning"
        onClick={() => {
          dispatch(resetTodoList());
        }}
      >
        Clean todo list
      </Button>
    </div>
  );
};

export default ShowTodo;

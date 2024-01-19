import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },

  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;

      state.todoList.push(newTodo);
    },

    resetTodoList: (state, action) => {
      state.todoList = [];
    },
  },
});

export const { addTodo, resetTodoList } = todoSlice.actions;

export default todoSlice.reducer;

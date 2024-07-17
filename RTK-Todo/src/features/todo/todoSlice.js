import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello matlabi dunaye" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false, // Add a completed field with default value
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = text;
      }
    },
    toggleComplete: (state, action) => {
      const todoToUpdate = state.todos.find((todo) => todo.id === action.payload);
      if (todoToUpdate) {
        todoToUpdate.completed = !todoToUpdate.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;

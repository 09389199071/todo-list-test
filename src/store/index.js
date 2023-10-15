import todoSlice from "./slice/todoList/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    todoSlice,
  },
});

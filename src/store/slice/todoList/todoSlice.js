import { createSlice } from "@reduxjs/toolkit";
import todoApi from "./todoApi";
import { createThunkFromApi } from "@/store/utils";

export const getList = createThunkFromApi("todo/list", todoApi.list);

export const addTask = createThunkFromApi("todo/addTask", todoApi.add);

export const deleteTask = createThunkFromApi("todo/deleteTask", todoApi.delete);

export const editTask = createThunkFromApi("todo/editTask", todoApi.edit);

const initialState = {
  tasks: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    setTasks(state, { payload }) {
      state.tasks = payload?.message;
    },
  },
});

export const { setTasks } = todoSlice.actions;

export default todoSlice.reducer;

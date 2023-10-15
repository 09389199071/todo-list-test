import axios from "axios";
import { Tasks, deleteTask, editTask } from "./api";

const todoApi = {
  list: async () => await axios.get(Tasks),
  add: async (task) => await axios.post(Tasks, task),
  delete: async (taskId) => await axios.delete(deleteTask(taskId)),
  edit: async (taskId, updatedTask) =>
    await axios.put(editTask(taskId), updatedTask),
};

export default todoApi;

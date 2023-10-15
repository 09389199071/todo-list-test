"use client";
import styles from "./style.module.css";
import { useState } from "react";
import { addTask } from "@/store/slice/todoList/todoSlice";
import useDispatch from "../../hooks/useDispatch";
import { v4 as uuid } from "uuid";
const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      id: uuid(),
      title: title,
      description: description,
      done: false,
    };
    dispatch(addTask(body));
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <p className={styles.title}>Add To Do</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className="lable">Title:</label>
        <input
          type="text"
          value={title}
          autocomplete="off"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className={styles.btnSubmit}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;

import useDispatch from "@/hooks/useDispatch";
import { deleteTask, editTask } from "@/store/slice/todoList/todoSlice";
import styles from "./style.module.css";
import { BsCheckLg, BsX } from "react-icons/bs";
import { useState } from "react";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.description
  );

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    setEditing(true);
  };
  const handleSave = () => {
    const updatedTask = {
      title: updatedTitle,
      description: updatedDescription,
    };
    dispatch(editTask(task.id, updatedTask));

    setEditing(false);
  };
  return (
    <>
      {editing ? (
        <div className={styles.WrapperTask}>
          <p>
            Status:{" "}
            {task.done ? (
              <BsCheckLg className={styles.colorGreen} />
            ) : (
              <BsX className={styles.colorRed} />
            )}
          </p>
          <div className={styles.inputEdit}>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <input
              type="text"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          </div>

          <button onClick={handleSave} className={styles.save}>
            Save
          </button>
        </div>
      ) : (
        <div className={styles.WrapperTask}>
          <div className={styles.text}>
            <p>
              Status:{" "}
              {task.done ? (
                <BsCheckLg className={styles.colorGreen} />
              ) : (
                <BsX className={styles.colorRed} />
              )}
            </p>
            <div className={styles.textTodo}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
          </div>
          <div className={styles.button}>
            <button onClick={handleToggle} className={styles.edit}>
              Edit
            </button>
            <button onClick={handleDelete} className={styles.delete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Task;

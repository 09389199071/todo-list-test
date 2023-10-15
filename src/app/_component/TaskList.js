"use client";
import { useEffect } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import useDispatch from "@/hooks/useDispatch";
import { getList } from "@/store/slice/todoList/todoSlice";

const tasks = [
  {
    id: 1,
    title: " task 1",
    description: "description task 1",
    done: false,
  },
  {
    id: 2,
    title: "task 2",
    description: "description task 2",
    done: true,
  },
];
const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  // const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {tasks?.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;

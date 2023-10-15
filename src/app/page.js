import TaskForm from "./_component/TaskForm";
import TaskList from "./_component/TaskList";

const Home = () => {
  return (
    <div className="container">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;

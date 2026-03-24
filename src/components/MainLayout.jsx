
import TaskSideBar from "./TaskSideBar";
import TaskCardContainer from "./TaskCardContainer";
import Header from "./Header";
import { useState } from "react";

function MainLayout() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(title, description, priority) {
    setTasks([
      ...tasks,
      { title: title, description: description, priority: priority },
    ]);
  }

  return (
    <div className="page-shell">
      <Header />
      <div className="layout">
        <TaskSideBar />
        <section className="board" aria-label="Uppgiftstavla">
          <TaskCardContainer />
          <TaskCardContainer />
          <TaskCardContainer />
        </section>
      </div>
    </div>
  );
}

export default MainLayout;

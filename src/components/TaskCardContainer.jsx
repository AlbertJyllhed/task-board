import React from "react";
import TaskCard from "./TaskCard";

function TaskCardContainer() {
  return (
    <article className="column">
      <header className="column-header">
        <div>
          <p className="column-kicker">Status</p>
          <h2>Todo</h2>
        </div>
        <span className="column-count">0</span>
      </header>

      <div className="task-list">
        <TaskCard
          priority={"High"}
          title={"Test rubrik"}
          description={"Detta är en uppgift som ska utföras snarast!"}
        />

        <div className="empty-state" hidden>
          <p>Det finns inga uppgifter här ännu.</p>
        </div>
      </div>
    </article>
  );
}

export default TaskCardContainer;

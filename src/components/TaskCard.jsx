import React from "react";

function TaskCard({ priority, title, description }) {
  return (
    <article className="task-card priority-high">
      <div className="task-card-top">
        <span className="priority-badge">{priority}</span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="task-actions">
        <button className="btn btn-ghost" type="button" disabled>
          Till vänster
        </button>
        <button className="btn btn-ghost" type="button">
          Till höger
        </button>
      </div>
    </article>
  );
}

export default TaskCard;

import React from "react";

function TaskCard({ priority, title, description, id, handleStatusChange }) {
    function getPriorityStyle() {
        if (priority === "low") {
            return "priority-low";
        } else if (priority === "medium") {
            return "priority-medium";
        } else {
            return "priority-high";
        }
    }

    return (
        <article className={`task-card ${getPriorityStyle()}`}>
            <div className="task-card-top">
                <span className="priority-badge">{priority}</span>
            </div>

            <h3>{title}</h3>
            <p>{description}</p>

            <div className="task-actions">
                <button className="btn btn-ghost" type="button" disabled>
                    Till vänster
                </button>
                <button
                    className="btn btn-ghost"
                    type="button"
                    onClick={() => handleStatusChange(id)}
                >
                    Till höger
                </button>
            </div>
        </article>
    );
}

export default TaskCard;

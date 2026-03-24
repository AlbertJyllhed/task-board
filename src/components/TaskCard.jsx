import React from "react";

function TaskCard({ priority, title, description }) {
    return (
        <article class="task-card priority-high">
            <div class="task-card-top">
                <span class="priority-badge">{priority}</span>
            </div>

            <h3>{title}</h3>
            <p>{description}</p>

            <div class="task-actions">
                <button class="btn btn-ghost" type="button" disabled>
                    Till vänster
                </button>
                <button class="btn btn-ghost" type="button">
                    Till höger
                </button>
            </div>
        </article>
    );
}

export default TaskCard;

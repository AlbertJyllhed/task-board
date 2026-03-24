import React from "react";
import TaskCard from "./TaskCard";

function TaskCardContainer({ heading, tasks, todoCount, handleStatusChange }) {
    return (
        <article className="column">
            <header className="column-header">
                <div>
                    <p className="column-kicker">Status</p>
                    <h2>{heading}</h2>
                </div>
                <span className="column-count">{todoCount(heading)}</span>
            </header>

            <div className="task-list">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        priority={task.priority}
                        title={task.title}
                        description={task.description}
                        id={task.id}
                        handleStatusChange={handleStatusChange}
                    />
                ))}

                <div className="empty-state" hidden>
                    <p>Det finns inga uppgifter här ännu.</p>
                </div>
            </div>
        </article>
    );
}

export default TaskCardContainer;

import React from "react";
import TaskCard from "./TaskCard";

function TaskCardContainer() {
    return (
    
            <article class="column">
                <header class="column-header">
                    <div>
                        <p class="column-kicker">Status</p>
                        <h2>Todo</h2>
                    </div>
                    <span class="column-count">0</span>
                </header>

                <div class="task-list">
                    <TaskCard
                        priority={"High"}
                        title={"Test rubrik"}
                        description={
                            "Detta är en uppgift som ska utföras snarast!"
                        }
                    />

                    <div class="empty-state" hidden>
                        <p>Det finns inga uppgifter här ännu.</p>
                    </div>
                </div>
            </article>
       
    );
}

export default TaskCardContainer;

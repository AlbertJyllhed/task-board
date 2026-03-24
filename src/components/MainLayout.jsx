import TaskSideBar from "./TaskSideBar";
import TaskCardContainer from "./TaskCardContainer";
import Header from "./Header";
import { useState } from "react";

function MainLayout() {
    const [tasks, setTasks] = useState([
        {
            title: "Städa",
            description: "Garaget",
            priority: "low",
            status: "Todo",
            id: crypto.randomUUID(),
        },
        {
            title: "Handla",
            description: "Mat",
            priority: "medium",
            status: "Doing",
            id: crypto.randomUUID(),
        },
        {
            title: "Koda",
            description: "Koden",
            priority: "high",
            status: "Done",
            id: crypto.randomUUID(),
        },
    ]);
    const headings = ["Todo", "Doing", "Done"];

    function handleAddTask(title, description, priority) {
        setTasks([
            ...tasks,
            {
                title: title,
                description: description,
                priority: priority,
                status: "Todo",
                id: crypto.randomUUID(),
            },
        ]);
    }

    function filterTasks(heading) {
        return tasks.filter((task) => heading === task.status);
    }

    function todoCount(heading) {
        let count = 0;
        tasks.forEach((task) => {
            if (task.status === heading) {
                count++;
            }
        });
        return count;
    }

    function handleStatusChange(id, up) {
        const tasksCopy = [...tasks];
        tasksCopy.forEach((task) => {
            if (task.id === id) {
                const oldIndex = headings.indexOf(task.status);
                if (up) {
                    task.status =
                        oldIndex !== headings.count
                            ? headings[oldIndex + 1]
                            : headings[oldIndex];
                } else {
                    task.status =
                        oldIndex > 0
                            ? headings[oldIndex - 1]
                            : headings[oldIndex];
                }
            }
        });
        setTasks(tasksCopy);
        console.log(tasks[id]);
    }

    return (
        <div className="page-shell">
            <Header headings={headings} todoCount={todoCount} />
            <div className="layout">
                <TaskSideBar handleAddTask={handleAddTask} />
                <section className="board" aria-label="Uppgiftstavla">
                    {headings.map((heading, index) => (
                        <TaskCardContainer
                            key={index}
                            heading={heading}
                            tasks={filterTasks(heading)}
                            todoCount={todoCount}
                            handleStatusChange={handleStatusChange}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
}

export default MainLayout;

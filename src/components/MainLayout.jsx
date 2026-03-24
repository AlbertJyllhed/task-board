import React from "react";
import TaskSideBar from "./TaskSideBar";
import TaskCardContainer from "./TaskCardContainer";
import Header from "./Header";

function MainLayout() {
    return (
        <div className="page-shell">
            <Header/>
        <div className="layout">
            <TaskSideBar />
            <section class="board" aria-label="Uppgiftstavla">
                <TaskCardContainer />
                <TaskCardContainer />
                <TaskCardContainer />
            </section>
        </div>
        </div>
    );
}

export default MainLayout;

import React from "react";
import StatCard from "./StatCard";

function Header() {
    return (
        <header class="hero">
            <div>
                <p class="eyebrow">Gruppövning · Front-end</p>
                <h1>Task Board</h1>
                <p class="hero-text">
                    Bygg funktionaliteten själv i Vanilla JavaScript eller
                    React.
                </p>
            </div>

            <div class="hero-stats" aria-label="Snabbstatistik">
                <StatCard title="Todo" count={0} />
                <StatCard title="Doing" count={0} />
                <StatCard title="Done" count={0} />
            </div>
        </header>
    );
}

export default Header;

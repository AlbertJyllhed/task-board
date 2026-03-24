import React from "react";

function StatCard({ title, count }) {
    return (
        <article className="stat-card">
            <span className="stat-label">{title}</span>
            <strong className="stat-value">{count}</strong>
        </article>
    );
}

export default StatCard;

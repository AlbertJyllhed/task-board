import StatCard from "./StatCard";

function Header({ headings, todoCount }) {
    return (
        <header className="hero">
            <div>
                <p className="eyebrow">Gruppövning · Front-end</p>
                <h1>Task Board</h1>
                <p className="hero-text">
                    Bygg funktionaliteten själv i Vanilla JavaScript eller
                    React.
                </p>
            </div>

            <div className="hero-stats" aria-label="Snabbstatistik">
                {headings.map((heading, index) => (
                    <StatCard
                        key={index}
                        title={heading}
                        count={todoCount(heading)}
                    />
                ))}
            </div>
        </header>
    );
}

export default Header;

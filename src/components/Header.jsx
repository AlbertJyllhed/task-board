
import StatCard from "./StatCard";

function Header() {
  return (
    <header className="hero">
      <div>
        <p className="eyebrow">Gruppövning · Front-end</p>
        <h1>Task Board</h1>
        <p className="hero-text">
          Bygg funktionaliteten själv i Vanilla JavaScript eller React.
        </p>
      </div>

      <div className="hero-stats" aria-label="Snabbstatistik">
        <StatCard title="Todo" count={0} />
        <StatCard title="Doing" count={0} />
        <StatCard title="Done" count={0} />
      </div>
    </header>
  );
}

export default Header;

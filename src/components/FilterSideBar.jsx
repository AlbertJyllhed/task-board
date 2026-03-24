function FilterSideBar() {
  return (
    <section className="card">
      <h2>Filter</h2>

      <div
        className="filter-group"
        role="group"
        aria-label="Filtrera på prioritet"
      >
        <button className="btn btn-secondary is-active" type="button">
          Alla
        </button>
        <button className="btn btn-secondary" type="button">
          Low
        </button>
        <button className="btn btn-secondary" type="button">
          Medium
        </button>
        <button className="btn btn-secondary" type="button">
          High
        </button>
      </div>
    </section>
  );
}

export default FilterSideBar;

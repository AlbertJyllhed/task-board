import React from "react";

function FilterSideBar() {
    return (
        <section class="card">
            <h2>Filter</h2>

            <div
                class="filter-group"
                role="group"
                aria-label="Filtrera på prioritet"
            >
                <button class="btn btn-secondary is-active" type="button">
                    Alla
                </button>
                <button class="btn btn-secondary" type="button">
                    Low
                </button>
                <button class="btn btn-secondary" type="button">
                    Medium
                </button>
                <button class="btn btn-secondary" type="button">
                    High
                </button>
            </div>
        </section>
    );
}

export default FilterSideBar;

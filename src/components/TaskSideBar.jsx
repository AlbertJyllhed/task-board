import React from "react";
import FilterSideBar from "./FilterSideBar";

function TaskSideBar() {
    return (
        <aside class="panel">
            <section class="card">
                <h2>Skapa uppgift</h2>
                <form class="task-form">
                    <div class="form-group">
                        <label for="title">Titel</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Till exempel: Bygg filterfunktion"
                        />
                    </div>

                    <div class="form-group">
                        <label for="description">Beskrivning</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            placeholder="Beskriv vad som behöver göras"
                        ></textarea>
                    </div>

                    <div class="form-group">
                        <label for="priority">Prioritet</label>
                        <select id="priority" name="priority">
                            <option value="low">Low</option>
                            <option value="medium" selected>
                                Medium
                            </option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Lägg till uppgift
                    </button>
                </form>
            </section>
            <FilterSideBar/>
       
        </aside>
    );
}

export default TaskSideBar;

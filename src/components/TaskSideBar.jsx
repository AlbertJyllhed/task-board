import React from "react";
import FilterSideBar from "./FilterSideBar";
import { useState } from "react";

function TaskSideBar({ handleAddTask }) {
  const [titleInput, setTitleInput] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  function onAddTask(e) {
    e.preventDefault();
    handleAddTask(titleInput, description, priority);
  }

  return (
    <aside className="panel">
      <section className="card">
        <h2>Skapa uppgift</h2>
        <form onSubmit={onAddTask} className="task-form">
          <div className="form-group">
            <label htmlFor="title">Titel</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Till exempel: Bygg filterfunktion"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Beskrivning</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Beskriv vad som behöver göras"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="priority">Prioritet</label>
            <select
              id="priority"
              name="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Lägg till uppgift
          </button>
        </form>
      </section>
      <FilterSideBar />
    </aside>
  );
}

export default TaskSideBar;

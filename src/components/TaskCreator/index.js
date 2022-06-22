import { useState } from "react";

export default function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className="m-3">
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
          <input
            type="text"
            placeholder="Enter a new task"
            onChange={(e) => setNewTaskName(e.target.value)}
            value={newTaskName}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Save task"
            className="btn btn-success btn-sm"
          />
        </div>
      </form>
    </div>
  );
}

import React from "react";
import TaskRow from "../TaskRow";

export default function TaskTable({ taskItems, toggleTask, showCompleted = false }) {
  const taskTableRows = (doneValue) => {
    return taskItems
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <div className="mt-3">
      <table className="table table-dark table-striped table-bordered border-secondary">
        <thead className="table-primary">
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(showCompleted)}</tbody>
      </table>
    </div>
  );
}

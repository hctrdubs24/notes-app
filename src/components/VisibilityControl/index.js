import React from "react";

export default function VisibilityControl({
  isChecked,
  setShowCompleted,
  cleanTask,
}) {
  function handledDelete() {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTask();
    }
  }
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
          type="checkbox"
          className="form-check-input"
        />
        <label>Show Task Done</label>
      </div>
      <button onClick={handledDelete} className="btn btn-danger btn-sm">
        Clear
      </button>
    </div>
  );
}

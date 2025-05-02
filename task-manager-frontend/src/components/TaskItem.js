import React from "react";

function TaskItem({ task, onDelete, onToggle, onView }) {
  return (
    <li
      style={{
        marginBottom: "12px",
        backgroundColor: "#f9f9f9",
        padding: "12px 16px",
        borderRadius: "8px",
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      <span style={{ fontWeight: "bold" }}>
        {task.title} — {task.completed ? "✅ Done" : "❌ Pending"}
      </span>

      <div>
        <button
          onClick={() => onView(task)}  // 👈 View Button trigger
          style={{
            marginRight: "10px",
            padding: "6px 12px",
            backgroundColor: "#17a2b8",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          View
        </button>

        <button
          onClick={() => onToggle(task.id)}
          style={{
            marginRight: "10px",
            padding: "6px 12px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Toggle
        </button>

        <button
          onClick={() => onDelete(task.id)}
          style={{
            padding: "6px 12px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
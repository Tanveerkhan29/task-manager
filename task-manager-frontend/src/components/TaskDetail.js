import React from "react";

function TaskDetail({ task, onClose }) {
  if (!task) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Task Detail</h2>
        <p><strong>Title:</strong> {task.title}</p>
        <p><strong>Description:</strong> {task.description}</p>
        <p><strong>Status:</strong> {task.completed ? "✅ Done" : "❌ Pending"}</p>
        <p><strong>Priority:</strong> {task.priority}</p>
        <p><strong>Deadline:</strong> {task.deadline}</p>
        <button onClick={onClose} style={styles.button}>Close</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex",
    justifyContent: "center", alignItems: "center",
    zIndex: 999
  },
  modal: {
    background: "#fff", padding: 20, borderRadius: 8, width: 300
  },
  button: {
    marginTop: 10, padding: "6px 12px", backgroundColor: "#333",
    color: "white", border: "none", borderRadius: 4
  }
};

export default TaskDetail;
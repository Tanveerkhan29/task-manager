import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setError("No access token found.");
        return;
      }

      try {
        const response = await axios.get("http://127.0.0.1:8000/api/tasks/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTasks(response.data);
      } catch (err) {
        setError("Failed to fetch tasks.");
      }
    };

    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Tasks</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> —{" "}
            {task.completed ? "✅ Completed" : "❌ Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import TaskDetail from "./TaskDetail"; // ✅ Added for modal view

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // ✅ For viewing detail

  const fetchTasks = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Fetched tasks:", response.data);
      setTasks(response.data);
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("accessToken");
    try {
      await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const handleToggle = async (id) => {
    const token = localStorage.getItem("accessToken");
    const task = tasks.find((t) => t.id === id);
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/tasks/${id}/`,
        { ...task, completed: !task.completed },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
    } catch (error) {
      console.error("Toggle failed", error);
    }
  };

  const handleView = (task) => {
    setSelectedTask(task);
  };

  const closeDetail = () => {
    setSelectedTask(null);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ maxWidth: "700px", margin: "50px auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>📝 Your Tasks</h2>
      <AddTask onTaskAdded={fetchTasks} />
      <ul style={{ padding: 0 }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onToggle={handleToggle}
            onView={handleView} // ✅ added
          />
        ))}
      </ul>
      <TaskDetail task={selectedTask} onClose={closeDetail} /> {/* ✅ Modal */}
    </div>
  );
}

export default Dashboard;
import React, { useState } from "react";
import axios from "axios";

function AddTask({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");

    try {
      await axios.post("http://127.0.0.1:8000/api/tasks/", {
        title,
        description,
        deadline,
        priority,
        completed: false,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Clear form
      setTitle("");
      setDescription("");
      setDeadline("");
      setPriority(1);

      if (onTaskAdded) onTaskAdded();

    } catch (err) {
      console.error("Error creating task", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />{" "}
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
      ></textarea>{" "}
      <br />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />{" "}
      <br />
      <input
        type="number"
        placeholder="Priority (1-5)"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        min="1"
        max="5"
      />{" "}
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
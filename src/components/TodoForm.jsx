import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fileToBase64 } from "../utils/fileToBase64";
import { createTodo, updateTodo, getTodos } from "../services/todoService";

const TodoForm = ({ mode }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
    image: "",
  });

  useEffect(() => {
    if (mode === "edit") {
      getTodos().then((todos) => {
        const todo = todos.find((t) => t.id === Number(id));
        if (todo) setForm(todo);
      });
    }
  }, [id, mode]);

  const handleImage = async (e) => {
    const base64 = await fileToBase64(e.target.files[0]);
    setForm({ ...form, image: base64 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      ...form,
      id: mode === "create" ? Date.now() : Number(id),
    };

    mode === "create" ? createTodo(todo) : updateTodo(todo.id, todo);
    navigate("/todos");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">
        {mode === "create" ? "Create Todo" : "Edit Todo"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          className="input"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          className="input"
          placeholder="Description"
          value={form.description || ""}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <select
          className="input"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <input type="file" onChange={handleImage} />

        <button className="btn btn-primary w-full">
          {mode === "create" ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

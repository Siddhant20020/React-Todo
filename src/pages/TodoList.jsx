import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../services/todoService";
import TodoCard from "../components/TodoCard";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTodos = () => {
    setLoading(true);
    getTodos().then((data) => {
      setTodos(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadTodos();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <Link to="/todos/create" className="btn btn-primary">
          Create Todo
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} refresh={loadTodos} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

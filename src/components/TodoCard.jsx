import { Link } from "react-router-dom";
import { deleteTodo } from "../services/todoService";

const TodoCard = ({ todo, refresh }) => {
  const handleDelete = () => {
    if (window.confirm("Delete this todo?")) {
      deleteTodo(todo.id);
      refresh();
    }
  };

  return (
    <div className="border rounded p-3 space-y-2">
      {todo.image && (
        <img src={todo.image} className="h-32 w-full object-cover rounded" />
      )}

      <h2 className="font-bold">{todo.title}</h2>

      <span
        className={`text-sm px-2 py-1 rounded ${
          todo.status === "completed"
            ? "bg-green-200"
            : "bg-yellow-200"
        }`}
      >
        {todo.status}
      </span>

      <div className="flex gap-2 mt-2">
        <Link
          to={`/todos/${todo.id}/edit`}
          className="btn btn-primary"
        >
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;

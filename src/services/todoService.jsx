const KEY = "todos";

export const getTodos = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse(localStorage.getItem(KEY)) || []);
    }, 300);
  });

export const saveTodos = (todos) => {
  localStorage.setItem(KEY, JSON.stringify(todos));
};

export const createTodo = (todo) => {
  const todos = JSON.parse(localStorage.getItem(KEY)) || [];
  todos.push(todo);
  saveTodos(todos);
};

export const updateTodo = (id, updated) => {
  const todos = JSON.parse(localStorage.getItem(KEY)) || [];
  saveTodos(todos.map((t) => (t.id === id ? updated : t)));
};

export const deleteTodo = (id) => {
  const todos = JSON.parse(localStorage.getItem(KEY)) || [];
  saveTodos(todos.filter((t) => t.id !== id));
};

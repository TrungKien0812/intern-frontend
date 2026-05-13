const todos = [
  { id: 1, title: "Học React Class Component", completed: false },
  { id: 2, title: "Hoàn thành bài tập Todo App", completed: false },
  { id: 3, title: "Ôn tập state và props", completed: true },
  { id: 4, title: "Chuẩn bị báo cáo cuối kỳ", completed: false },
];

export function getAll() {
  return [...todos];
}

export function deleteById(id) {
  for (let i = 0; i < todos.length; i++) {
    if (id === todos[i].id) {
      todos.splice(i, 1);
      break;
    }
  }
}

export function addTodo({ title }) {
  if (!title) {
    throw new Error("Title is required");
  }

  const nextId =
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

  const newTodo = {
    id: nextId,
    title,
    completed: false,
  };

  todos.push(newTodo);
  return newTodo;
}

export function toggleCompleted(id) {
  const todo = todos.find((item) => item.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
}

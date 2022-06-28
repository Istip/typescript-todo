import { useState } from 'react';
import { Todo } from './models/todo.model';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (text: string) => {
    const newTodo = { id: new Date().toISOString(), text };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <NewTodo addNewTodo={addNewTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;

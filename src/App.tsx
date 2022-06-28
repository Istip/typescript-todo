import { useState } from 'react';
import { Todo } from './models/todo.model';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log();
  const addNewTodo = (text: string) => {
    const newTodo = { id: Math.random.toString(), text };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  return (
    <div className="App">
      <h1>TS App</h1>
      <NewTodo addNewTodo={addNewTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;

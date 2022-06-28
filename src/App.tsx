import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Finish something' }];

  const addNewTodo = (text: string) => {
    console.log(text);
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

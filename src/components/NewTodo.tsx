import { useRef } from 'react';
import '../NewTodo.css';

interface NewTodoInterface {
  addNewTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoInterface> = ({ addNewTodo }) => {
  const input = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.current!.value;
    addNewTodo(text);

    input.current!.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="todo-text">Todo text: </label>
        <input type="text" id="todo-text" ref={input} required />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;

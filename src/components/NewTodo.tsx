import { useRef } from 'react';

interface NewTodoInterface {
  addNewTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoInterface> = ({ addNewTodo }) => {
  const input = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.current!.value;
    addNewTodo(text);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="todo-text">Todo text: </label>
        <input type="text" id="todo-text" ref={input} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;

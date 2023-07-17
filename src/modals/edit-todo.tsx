import { useDispatch } from "react-redux";
import { editTodo } from "../stores/todo";
import { useState, ChangeEvent, FormEvent } from "react";

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

interface EditTodoProps {
  data: Todo;
  close: () => void;
}

export default function EditTodo({ data, close }: EditTodoProps) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>(data.title);
  const [done, setDone] = useState<boolean>(data.done);

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      editTodo({
        id: data.id,
        title: todo,
        done,
      })
    );
    close();
  };

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleDoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDone(e.target.checked);
  };

  return (
    <div className="edit-todo-container">
      <form onSubmit={submitHandle}>
        <input type="text" value={todo} onChange={handleTodoChange} /><br />
        <label>
          <input type="checkbox" checked={done} onChange={handleDoneChange} />
          Tesdiqle
        </label>
        <br />
        <button type="submit">Saxla</button>
      <button onClick={close}>Bagla</button>
      </form>
    </div>
  );
}
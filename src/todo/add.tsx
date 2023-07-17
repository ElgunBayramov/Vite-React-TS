import { nanoid } from "@reduxjs/toolkit";
import { useState, ChangeEvent, FormEvent } from "react";
import { addTodo } from "../stores/todo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../stores";

interface Todo {
  id: string;
  title: string;
  done: boolean;
  user: number;
}

export default function AddTodo() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [todo, setTodo] = useState<string>("");

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      const newTodo: Todo = {
        id: nanoid(),
        title: todo,
        done: false,
        user: user.id
      };
      dispatch(addTodo(newTodo));
      setTodo("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={submitHandle} className="formTodo">
      <input
        type="text"
        value={todo}
        onChange={handleChange}
        placeholder="deyer daxil edin"
        className="todo-input"
      />
      <button disabled={!todo || !user} type="submit" className="add-button">
        Elave et
      </button>
    </form>
  );
}

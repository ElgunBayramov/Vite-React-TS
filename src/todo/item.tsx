import { useDispatch } from "react-redux";
import { deleteTodo } from "../stores/todo";
import { useSelector } from "react-redux";
import { openModal } from "../stores/modal";
import { RootState } from "../stores";

interface Todo {
  id: number;
  title: string;
  user: number | null;
}

export default function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const deleteHandle = () => {
    dispatch(deleteTodo(todo.id));
  };

  const editHandle = () => {
    dispatch(
      openModal({
        name: "edit-todo",
        data: todo,
      })
    );
  };

  return (
    <li className="todo-item"> 
      <span className="todo-title">{todo.title} - {todo.user}</span> 
      {user !== null && todo.user === user.id && (
        <>
          <button onClick={editHandle} className="edit-button">Edit</button> 
          <button onClick={deleteHandle} className="delete-button">Delete</button> 
        </>
      )}
    </li>
  );
}

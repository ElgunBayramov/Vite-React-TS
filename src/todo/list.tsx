import TodoItem from "./item";
import { useSelector } from "react-redux";
import { RootState } from "../stores";

export default function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <ul className="todoList">
      {todos.map((todo:any, key) => (
        <TodoItem key={key} todo={todo} />
      ))}
    </ul>
  );
}
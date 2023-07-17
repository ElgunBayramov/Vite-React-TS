import EditTodo from "../modals/edit-todo";

interface Modal {
  name: string;
  element: React.ComponentType<any>;
}

const modals: Modal[] = [
  {
    name: 'edit-todo',
    element: EditTodo
  }
];

export default modals;
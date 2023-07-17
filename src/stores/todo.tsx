import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number | String;
  title: string;
  done: boolean;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: []
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [action.payload, ...state.todos];
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) => {
        if (action.payload.id === todo.id) {
          todo.title = action.payload.title;
          todo.done = action.payload.done;
        }
        return todo;
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }
  }
});

export const { addTodo, editTodo, deleteTodo } = todos.actions;
export default todos.reducer;
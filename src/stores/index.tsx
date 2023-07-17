import { configureStore, combineReducers } from "@reduxjs/toolkit";

import todo from "./todo"
import auth from "./auth"
import modal from "./modal"

const rootReducer = combineReducers({
  todo,
  auth,
  modal,
});

const store = configureStore({
  reducer: rootReducer
});


 export type RootState = ReturnType<typeof rootReducer>;

export default store;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
    username: string;
  }
  
  interface AuthState {
    user: User | null;
  }

const initialState: AuthState = {
    user: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    logout: (state:any) => {
      state.user = false;
    },
  }
});

export const { login, logout } = auth.actions;
export default auth.reducer;
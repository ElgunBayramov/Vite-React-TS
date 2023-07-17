import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  name: string | false;
  data: any | false;
  open: boolean;
}

const initialState: ModalState = {
  name: false,
  data: false,
  open: false
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ name: string; data?: any }>) => {
      state.name = action.payload.name;
      state.data = action.payload?.data || false;
      state.open = true;
    },
    closeModal: (state) => {
      state.name = false;
      state.data = false;
      state.open = false;
    }
  }
});

export const { openModal, closeModal } = modal.actions;
export default modal.reducer;
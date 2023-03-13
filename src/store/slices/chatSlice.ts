import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  theme: 'light',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    openModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      state.showModal = false;
    },
    setTheme(state, action: PayloadAction<'light' | 'dark'>) {
      state.theme = action.payload;
    },
  },
});

export const { openModal, closeModal, setTheme } = chatSlice.actions;

export default chatSlice.reducer;

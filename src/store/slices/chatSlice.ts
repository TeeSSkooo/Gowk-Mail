import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
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
  },
});

export const { openModal, closeModal } = chatSlice.actions;

export default chatSlice.reducer;

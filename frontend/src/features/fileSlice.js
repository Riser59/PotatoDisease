// fileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  files: [],
  lblres: {},
};

export const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    addFiles(state, action) {
      state.files.push(...action.payload);
    },
    clearFiles(state) {
      state.files = [];
    },
    setLblRes(state, action) {
      state.lblres = action.payload;
    },
  },
});

export const { addFiles, clearFiles, setLblRes } = fileSlice.actions;
export default fileSlice.reducer;

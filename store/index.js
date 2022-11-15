import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  showAddForm: false,
  showUpdateForm: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: initialState,
  reducers: {
    toggleAddForm(state) {
      state.showAddForm = !state.showAddForm;
    },
    toggleUpdateForm(state) {
      state.showUpdateForm = !state.showUpdateForm;
    },
  },
});

export const modalActions = modalSlice.actions;

const store = configureStore({
  reducer: modalSlice.reducer,
});
export default store;

import { createSlice } from "@reduxjs/toolkit";

interface IUseadminModalStore {
  isOpen: boolean;
}

const initialState: IUseadminModalStore = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "adminModal",
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { onOpen, onClose } = modalSlice.actions;
export default modalSlice.reducer;

import { baseApi } from "./api/baseApi";
import adminModal from "./features/modal/modalSlice";
import profile from "./features/profile/profileSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  modal: adminModal,
  user: profile,
};

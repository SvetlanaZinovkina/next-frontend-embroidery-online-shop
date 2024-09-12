import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/store-types";

const initialState: User = {
  id: null,
  username: "",
  role: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<User>>) {
      return { ...state, ...action.payload };
    },
    logoutUser(state) {
      return initialState;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

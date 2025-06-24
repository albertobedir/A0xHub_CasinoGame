import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../utils/utils";

const initialState = {
  theme: getCookie("casino_theme") || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload;
      setCookie("casino_theme", payload);
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      setCookie("casino_theme", state.theme);
    },
  },
});

export const { changeTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

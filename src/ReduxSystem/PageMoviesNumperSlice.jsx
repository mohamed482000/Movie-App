import { createSlice } from "@reduxjs/toolkit";

const PageMoviesNumperSlice = createSlice({
  name: "PageMoviesNumperSlice",
  initialState: { MoviesPageNum: 1 },
  reducers: {
    increaseMoviesPageNum: (state) => {
      state.MoviesPageNum++;
    },
    decreamentMoviesPageNum: (state) => {
      state.MoviesPageNum--;
    },
    setMoviesPageNum: (state, action) => {
      state.MoviesPageNum = action.payload;
    },
  },
});

export default PageMoviesNumperSlice.reducer;

export const {
  increaseMoviesPageNum,
  decreamentMoviesPageNum,
  setMoviesPageNum,
} = PageMoviesNumperSlice.actions;

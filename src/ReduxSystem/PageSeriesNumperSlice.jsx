import { createSlice } from "@reduxjs/toolkit";

const PageSeriesNumperSlice = createSlice({
  name: "PageSeriesNumperSlice",
  initialState: { SeriesPageNum: 1 },
  reducers: {
    increaseNum: (state) => {
      state.SeriesPageNum++;
    },
    decreamentNum: (state) => {
      state.SeriesPageNum--;
    },
    setSeriesPageNum: (state, action) => {
      state.SeriesPageNum = action.payload;
    },
  },
});

export default PageSeriesNumperSlice.reducer;

export const { increaseNum, decreamentNum, setSeriesPageNum } =
  PageSeriesNumperSlice.actions;

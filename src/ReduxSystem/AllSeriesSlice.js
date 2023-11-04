import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllSeries = createAsyncThunk(
  'getAllSeriesData',
  async (id = '1', thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const response = await axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/tv/popular',
        params: { language: 'en-US', page: id },
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDhlM2I3NDYyMGM5NzEyYzIzNzNjODMyNzJlNmYxMCIsInN1YiI6IjY0ZDQwZmU0NWE5OTE1MDBjOGI1MzU3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-KrZJ7fF-jV76Wc1B9CQkzHCuaV4VdeIcQOu63kvoJI',
        },
      })
      return response.data
    } catch (err) {
      return rejectWithValue(err)
    }
  },
)
const initialState = {
  allSeries: [],
  allSeriesLoading: true,
  allSeriesError: null,
  numperOfPages: 0,
}

const AllSeriesSlice = createSlice({
  name: 'allSeriesSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllSeries.pending, (state) => {
      state.allSeriesLoading = true
    })
    builder.addCase(getAllSeries.fulfilled, (state, action) => {
      state.allSeriesLoading = false
      state.allSeries = action.payload.results
      state.numperOfPages = action.payload.total_pages
    })
    builder.addCase(getAllSeries.rejected, (state, action) => {
      state.allSeriesLoading = false
      state.allSeriesError = true
    })
  },
})

export default AllSeriesSlice.reducer

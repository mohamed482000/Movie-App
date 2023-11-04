import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTopSeriesData = createAsyncThunk(
  'TopSeriesData',
  async (id = '1', thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const response = await axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/tv/top_rated',
        params: { language: 'en-US', page: '1' },
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
  topSeries: [],
  topSeriesLoading: true,
  topSeriesError: null,
}

const TopSeriesSlice = createSlice({
  name: 'Topmovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTopSeriesData.pending, (state) => {
      state.topSeriesLoading = true
    })
    builder.addCase(getTopSeriesData.fulfilled, (state, action) => {
      state.topSeriesLoading = false
      state.topSeries = action.payload.results.filter(
        (ser) => ser.popularity >= 170,
      )
    })
    builder.addCase(getTopSeriesData.rejected, (state, action) => {
      state.topSeriesLoading = false
      state.topSeriesError = true
    })
  },
})

export default TopSeriesSlice.reducer

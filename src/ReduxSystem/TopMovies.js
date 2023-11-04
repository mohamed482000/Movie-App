import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTopMoviesData = createAsyncThunk(
  'getTopMoviesData',
  async (id = '1', thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const response = await axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/top_rated',
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
  topMovies: [],
  topMoviesLoading: true,
  topMoviesError: null,
}

const TopMoviesSlice = createSlice({
  name: 'Topmoviesslice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTopMoviesData.pending, (state) => {
      state.topMoviesLoading = true
    })
    builder.addCase(getTopMoviesData.fulfilled, (state, action) => {
      state.topMoviesLoading = false
      state.topMovies = action.payload.results.filter((mov, i) => i <= 9)
    })
    builder.addCase(getTopMoviesData.rejected, (state, action) => {
      state.topMoviesLoading = false
      state.topMoviesError = true
    })
  },
})

export default TopMoviesSlice.reducer

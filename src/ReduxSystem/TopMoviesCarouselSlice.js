import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMoviesData = createAsyncThunk(
  'getMoviesData',
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
  movies: [],
  allMoviesLoading: true,
  allMoviesError: null,
}

const TopMoviesCarouselSlice = createSlice({
  name: 'Topmovies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMoviesData.pending, (state) => {
      state.allMoviesLoading = true
    })
    builder.addCase(getMoviesData.fulfilled, (state, action) => {
      state.allMoviesLoading = false
      state.movies = action.payload.results
    })
    builder.addCase(getMoviesData.rejected, (state, action) => {
      state.allMoviesLoading = false
      state.allMoviesError = true
    })
  },
})

export default TopMoviesCarouselSlice.reducer

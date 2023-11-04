import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMovieDetails = createAsyncThunk(
  'getMovieData',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const response = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: { language: 'en-US' },
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
  movieDetails: {},
  movieDetailsLoading: true,
  movieDetailsError: null,
}

const MovieDetailsSlice = createSlice({
  name: 'MovieDetails',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovieDetails.pending, (state) => {
      state.movieDetailsLoading = true
    })
    builder.addCase(getMovieDetails.fulfilled, (state, action) => {
      state.movieDetailsLoading = false
      state.movieDetails = action.payload
    })
    builder.addCase(getMovieDetails.rejected, (state, action) => {
      state.movieDetailsLoading = false
      state.movieDetailsError = true
    })
  },
})

export default MovieDetailsSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllMovies = createAsyncThunk(
  'getAllMoviesData',
  async (id = '1', thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const response = await axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular',
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
  allMovies: [],
  allMoviesLoading: true,
  allMoviesError: null,
  numperOfPages: 0,
}

const AllMoviesSlice = createSlice({
  name: 'AllMoviesSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.pending, (state) => {
      state.allMoviesLoading = true
    })
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.allMoviesLoading = false
      state.allMovies = action.payload.results
      state.numperOfPages = action.payload.total_pages
    })
    builder.addCase(getAllMovies.rejected, (state, action) => {
      state.allMoviesLoading = false
      state.allMoviesError = true
    })
  },
})

export default AllMoviesSlice.reducer

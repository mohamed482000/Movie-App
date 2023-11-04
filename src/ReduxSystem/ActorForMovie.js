import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMovieActors = createAsyncThunk(
  'getActors',
  async (id = '1', thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const response = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}/credits`,
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
  castMovies: [],
  crewMovies: [],
  actorMoviesLoading: true,
  actorMoviesError: null,
}

const ActorMoviesSlice = createSlice({
  name: 'AllMoviesSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovieActors.pending, (state) => {
      state.actorMoviesLoading = true
    })
    builder.addCase(getMovieActors.fulfilled, (state, action) => {
      state.actorMoviesLoading = false
      state.castMovies = action.payload.cast
      state.crewMovies = action.payload.crew
    })
    builder.addCase(getMovieActors.rejected, (state, action) => {
      state.actorMoviesLoading = false
      state.actorMoviesError = true
    })
  },
})

export default ActorMoviesSlice.reducer

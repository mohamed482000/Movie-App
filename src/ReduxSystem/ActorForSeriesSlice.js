import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getSerieActors = createAsyncThunk(
  'getActors',
  async (id = '1', thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const response = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${id}/credits`,
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
  castSeries: [],
  crewSeries: [],
  actorSeriesLoading: true,
  actorSeriesError: null,
}

const ActorForSeriesSlice = createSlice({
  name: 'ActorForSeriesSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSerieActors.pending, (state) => {
      state.actorSeriesLoading = true
    })
    builder.addCase(getSerieActors.fulfilled, (state, action) => {
      state.actorSeriesLoading = false
      state.castSeries = action.payload.cast
      state.crewSeries = action.payload.crew
      // console.log(action.payload)
    })
    builder.addCase(getSerieActors.rejected, (state, action) => {
      state.actorSeriesLoading = false
      state.actorSeriesError = true
    })
  },
})

export default ActorForSeriesSlice.reducer

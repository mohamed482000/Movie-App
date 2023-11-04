import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getSerieDetails = createAsyncThunk(
  'getSerieDetails',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const response = await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${id}`,
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
  serieDetails: {},
  serieDetailsLoading: true,
  serieDetailsError: null,
}

const SeriesDetailsSlice = createSlice({
  name: 'MovieDetails',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSerieDetails.pending, (state) => {
      state.serieDetailsLoading = true
    })
    builder.addCase(getSerieDetails.fulfilled, (state, action) => {
      state.serieDetailsLoading = false
      state.serieDetails = action.payload
    })
    builder.addCase(getSerieDetails.rejected, (state, action) => {
      state.serieDetailsLoading = false
      state.serieDetailsError = true
    })
  },
})

export default SeriesDetailsSlice.reducer

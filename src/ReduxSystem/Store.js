import { configureStore } from '@reduxjs/toolkit'
import TopMoviesCarouselSlice from './TopMoviesCarouselSlice'
import TopSeriesSlice from './TopSeriesSlice'
import TopMoviesSlice from './TopMovies'
import MovieDetailsSlice from './MovieDetailsSlice'
import AllMoviesSlice from './AllMoviesSlice'
import AllSeriesSlice from './AllSeriesSlice'
import ActorMoviesSlice from './ActorForMovie'
import SeriesDetailsSlice from './SeriesDetailsSlice'
import ActorForSeriesSlice from './ActorForSeriesSlice'
import PageSeriesNumperSlice from './PageSeriesNumperSlice'
import PageMoviesNumperSlice from './PageMoviesNumperSlice'

const store = configureStore({
  reducer: {
    TopMoviesCarouselSlice,
    TopSeriesSlice,
    TopMoviesSlice,
    MovieDetailsSlice,
    AllMoviesSlice,
    AllSeriesSlice,
    ActorMoviesSlice,
    SeriesDetailsSlice,
    ActorForSeriesSlice,
    PageSeriesNumperSlice,
    PageMoviesNumperSlice,
  },
})
export default store

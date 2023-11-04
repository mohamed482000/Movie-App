import React, { useState } from 'react'
import HomePage from './pages/homePage/HomePage'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import MovieDetails from './pages/movieDetails/MovieDetails'
import MoviesPage from './pages/moviesPage/MoviesPage'
import SeriesPage from './pages/seriesPage/SeriesPage'
import SerieDetails from './pages/serieDetails/SerieDetails'
import Footer from './components/Footer/Footer'

function App() {
  const [reRenderMoviesPage, setReRenderMoviesPage] = useState(false)
  const [reRenderSeriesPage, setReRenderSeriesPage] = useState(false)

  return (
    <div className="App">
      <Header
        setReRenderMoviesPage={setReRenderMoviesPage}
        setReRenderSeriesPage={setReRenderSeriesPage}
      />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route
          path="/allmovies"
          element={
            <MoviesPage
              reRenderMoviesPage={reRenderMoviesPage}
              setReRenderMoviesPage={setReRenderMoviesPage}
            />
          }
        />
        <Route
          path="/allseries"
          element={
            <SeriesPage
              reRenderSeriesPage={reRenderSeriesPage}
              setReRenderSeriesPage={setReRenderSeriesPage}
            />
          }
        />
        <Route path="/seriedetails/:id" element={<SerieDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

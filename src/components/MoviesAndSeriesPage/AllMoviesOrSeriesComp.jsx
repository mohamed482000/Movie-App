import React from "react";
import { useSelector } from "react-redux";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import MovieORSerieComp from "./MovieORSerieComp";

function AllMoviesOrSeriesComp({ moviesOrSeries }) {
  const { allMovies, allMoviesLoading, allMoviesError } = useSelector(
    (state) => state.AllMoviesSlice
  );
  const { allSeries, allSeriesLoading, allSeriesError } = useSelector(
    (state) => state.AllSeriesSlice
  );

  return (
    <div className="container flex flex-wrap justify-center items-baseline w-full  mx-auto ">
      {moviesOrSeries === "movies" &&
      allMoviesLoading === false &&
      allMoviesError === null ? (
        allMovies.map((movOrSeries) => (
          <MovieORSerieComp
            moviesOrSeries={moviesOrSeries}
            movOrSeries={movOrSeries}
            key={movOrSeries.id}
          />
        ))
      ) : moviesOrSeries === "series" &&
        allSeriesLoading === false &&
        allSeriesError === null ? (
        allSeries.map((movOrSeries) => (
          <MovieORSerieComp
            moviesOrSeries={moviesOrSeries}
            movOrSeries={movOrSeries}
            key={movOrSeries.id}
          />
        ))
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}

export default AllMoviesOrSeriesComp;

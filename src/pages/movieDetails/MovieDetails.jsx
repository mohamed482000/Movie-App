import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../ReduxSystem/MovieDetailsSlice";
import OverLay from "../../components/overLay/OverLay";
import MovieAndSerieHeader from "../../components/movieAndSerieHeader/MovieAndSerieHeader";
import MovieInfo from "../../components/movieDetailsPageComps/MovieInfo";
import MovieCastDetails from "../../components/movieDetailsPageComps/MovieCastDetails";
import { getMovieActors } from "../../ReduxSystem/ActorForMovie";

import "./movieDetails.css";
import MoreInfoMovie from "../../components/movieDetailsPageComps/MoreInfoMovie";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";

function MovieDetails() {
  const dispatch = useDispatch();

  const { movieDetails, movieDetailsLoading, movieDetailsError } = useSelector(
    (state) => state.MovieDetailsSlice
  );

  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovieDetails(id));
    dispatch(getMovieActors(id));
    window.scroll(0, 0);
  }, []);

  return (
    <div className="bg-black ">
      <div
        className="movie-ser-details-wrapper bg-cover bg-no-repeat relative  h-max"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieDetails.backdrop_path})`,
          width: "100%",
        }}
      >
        <OverLay />
        <MovieAndSerieHeader movOrSer={"movies"} />
        {movieDetailsLoading === false && movieDetailsError === null ? (
          <MovieInfo movieDetails={movieDetails} />
        ) : (
          <LoadingComponent />
        )}
      </div>
      <div className="more-info-mov-ser flex ">
        <MovieCastDetails />
        <MoreInfoMovie movieDetails={movieDetails} />
      </div>
    </div>
  );
}

export default MovieDetails;

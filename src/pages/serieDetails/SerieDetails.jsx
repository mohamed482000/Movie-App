import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OverLay from "../../components/overLay/OverLay";
import MovieAndSerieHeader from "../../components/movieAndSerieHeader/MovieAndSerieHeader";
import { getSerieDetails } from "../../ReduxSystem/SeriesDetailsSlice";
import SeriesInfo from "../../components/seriesDetailsPageComps/SeriesInfo";
import { getSerieActors } from "../../ReduxSystem/ActorForSeriesSlice";
import SeriesCastDetails from "../../components/seriesDetailsPageComps/SeriesCastDetails";
import MoreInfoSeries from "../../components/seriesDetailsPageComps/MoreInfoSeries";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";

function SerieDetails() {
  const dispatch = useDispatch();

  const { serieDetails, serieDetailsLoading, serieDetailsError } = useSelector(
    (state) => state.SeriesDetailsSlice
  );

  const { id } = useParams();
  useEffect(() => {
    dispatch(getSerieDetails(id));
    dispatch(getSerieActors(id));

    window.scroll(0, 0);
  }, []);
  return (
    <div className="bg-black " style={{ minHeight: "90vh" }}>
      <div
        className="movie-ser-details-wrapper bg-cover bg-no-repeat relative bg-black h-max"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${serieDetails.backdrop_path})`,
          width: "100%",
        }}
      >
        <OverLay />
        <MovieAndSerieHeader movOrSer={"series"} />
        {serieDetailsLoading === false && serieDetailsError === null ? (
          <SeriesInfo serieDetails={serieDetails} />
        ) : (
          <LoadingComponent />
        )}
      </div>
      <div className="more-info-mov-ser flex justify-between">
        <SeriesCastDetails />
        <MoreInfoSeries serieDetails={serieDetails} />
      </div>
    </div>
  );
}

export default SerieDetails;

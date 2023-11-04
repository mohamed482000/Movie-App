import React from "react";
import SeriesCast from "./SeriesCast";

function SeriesInfo({ serieDetails }) {
  return (
    <div className="movie-ser-container absolute top-20 flex ">
      <div className="poster-img ">
        <img
          src={`https://www.themoviedb.org//t/p/w220_and_h330_face${serieDetails.poster_path}`}
          alt="series img"
          className="w-full h-full block"
        />
      </div>
      <div className="movie-info  text-white pl-5 pb-2">
        <h2 className="capitalize text-2xl font-bold">
          {serieDetails.original_name}
        </h2>
        <div className="date font-bold mt-3 mb-2">
          <span className="date">{serieDetails.first_air_date}</span>
          <span className="language uppercase mx-2">
            ({serieDetails.original_language})
          </span>
          <span>👉</span>
          <span className=" ml-2 mr-1">
            {serieDetails.genres
              ? serieDetails.genres.map((g) => (
                  <span className="mr-2" key={g.id}>
                    {g.name},
                  </span>
                ))
              : ""}
          </span>
          <span>👈</span>
          <span></span>
        </div>
        <div className="overview text-white">
          <span
            className="text-3xl font-bold my-5 mr-2"
            style={{ color: "#1BD5FC" }}
          >
            overView :
          </span>
          {serieDetails.overview.split(" ").slice(0, 30).join(" ")}
        </div>
        <SeriesCast />
      </div>
    </div>
  );
}

export default SeriesInfo;

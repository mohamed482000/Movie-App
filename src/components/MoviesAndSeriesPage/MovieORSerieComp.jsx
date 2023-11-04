import React, { useEffect, useState } from "react";
import StarsRateComp from "../homeComponents/StarsRateComp";
import ShowMoreText from "react-show-more-text";
import { Link } from "react-router-dom";

function MovieORSerieComp({ movOrSeries, moviesOrSeries }) {
  const [screnWidth, setScrenWidth] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 718) {
      setScrenWidth(true);
    }
    return;
  }, []);
  return (
    <div
      className={screnWidth ? "mb-16 rounded-md" : "mr-10 mb-16 rounded-md"}
      style={{
        backgroundColor: "#2A363E",
      }}
    >
      <div className="movie-img w-full">
        <img
          src={`https://www.themoviedb.org//t/p/w220_and_h330_face${movOrSeries.poster_path}`}
          className="rounded-t-md w-full"
          alt="movie img"
        />
      </div>
      <div className="movie-info p-3">
        <h4
          className="text-white text-xl flex items-start mb-3"
          style={{ minHeight: "60px", width: "235px" }}
        >
          <span className="uppercase mr-1" style={{ color: "#1BD5FC" }}>
            title
          </span>
          : {""}
          <ShowMoreText
            lines={1}
            more="Show more"
            less="Show less"
            className="content-css inline-block"
            anchorClass="show-more-less-clickable"
            expanded={false}
            width={240}
            truncatedEndingComponent={"... "}
          >
            {movOrSeries.original_title
              ? movOrSeries.original_title
              : movOrSeries.original_name}
          </ShowMoreText>
        </h4>
        <div className="rate-wrapper my-1 flex justify-between">
          <div className="rate" style={{ color: "#1BD5FC" }}>
            <span className="uppercase text-white">rate</span> :{" "}
            {movOrSeries.vote_average}
          </div>
          <StarsRateComp rating={movOrSeries.vote_average} />
        </div>
        <div className="details-button mt-4 flex items-center justify-center">
          <Link
            to={
              moviesOrSeries === "movies"
                ? `/moviedetails/${movOrSeries.id}`
                : `/seriedetails/${movOrSeries.id}`
            }
          >
            <button
              className="uppercase px-2 py-1 font-bold"
              style={{
                color: "#1BD5FC",
                border: "1px solid #1BD5FC",
                borderRadius: "4px",
              }}
            >
              details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieORSerieComp;

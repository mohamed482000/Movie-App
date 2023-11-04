import React, { useEffect } from "react";
import StarsRateComp from "./StarsRateComp";
import { getTopMoviesData } from "../../ReduxSystem/TopMovies";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import { Link } from "react-router-dom";

function TopMoviesComp({ screnWidth }) {
  const dispatch = useDispatch();

  const { topMovies, topMoviesLoading, topMoviesError } = useSelector(
    (state) => state.TopMoviesSlice
  );
  useEffect(() => {
    setTimeout(() => dispatch(getTopMoviesData()), 1000);
  }, []);

  return (
    <div className="my-10 min-w-full" style={{ minHeight: " 300px" }}>
      <h2
        className=" uppercase text-2xl mb-10 font-bold"
        style={{ color: "#00FFFF" }}
      >
        top movies
      </h2>
      <div className="container flex flex-wrap justify-center">
        {topMoviesLoading === true && topMoviesError == null ? (
          <LoadingComponent />
        ) : (
          topMovies.map((mov) => (
            <div
              key={mov.id}
              className={
                screnWidth ? "mb-16 rounded-md" : "mr-10 mb-16 rounded-md"
              }
              style={{ backgroundColor: "#2A363E" }}
            >
              <div className="movie-img">
                <img
                  src={`https://www.themoviedb.org//t/p/w220_and_h330_face${mov.poster_path}`}
                  className="rounded-t-md w-full"
                  alt="movie img"
                />
              </div>
              <div className="movie-info p-3">
                <h4
                  className="text-white text-xl h-16  mb-3"
                  style={{ width: "235px" }}
                >
                  <span className="uppercase" style={{ color: "#1BD5FC" }}>
                    title{" "}
                  </span>
                  : {mov.original_title}
                </h4>
                <div className="rate-wrapper my-1 flex justify-between">
                  <div className="rate" style={{ color: "#1BD5FC" }}>
                    <span className="uppercase text-white">rate</span> :{" "}
                    {mov.vote_average}
                  </div>
                  <StarsRateComp rating={mov.vote_average} />
                </div>
                <div className="details-button mt-4 flex items-center justify-center">
                  <Link to={`/moviedetails/${mov.id}`}>
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
          ))
        )}
      </div>
    </div>
  );
}

export default TopMoviesComp;

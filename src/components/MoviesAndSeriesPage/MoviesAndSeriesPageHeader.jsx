import React from "react";
import { useSelector } from "react-redux";

function MoviesAndSeriesPageHeader({ PageName }) {
  const { SeriesPageNum } = useSelector((state) => state.PageSeriesNumperSlice);
  const { MoviesPageNum } = useSelector((state) => state.PageMoviesNumperSlice);

  return (
    <div className="movies-page-header py-10 mx-auto w-fit text-center text-3xl font-bold">
      <h3 className=" uppercase text-white">{PageName}</h3>
      <h3 className=" uppercase text-white">
        page numper{" "}
        <span style={{ color: "#1BD5FC" }}>
          {" "}
          {PageName === "movies" ? MoviesPageNum : SeriesPageNum}
        </span>{" "}
        from <span style={{ color: "#1BD5FC" }}>100</span>
      </h3>
    </div>
  );
}

export default MoviesAndSeriesPageHeader;

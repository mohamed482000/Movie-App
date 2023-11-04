import React, { useEffect, useState } from "react";
import PaginationComp from "../../components/MoviesAndSeriesPage/PaginationComp";
import AllMoviesOrSeriesComp from "../../components/MoviesAndSeriesPage/AllMoviesOrSeriesComp";
import MoviesAndSeriesPageHeader from "../../components/MoviesAndSeriesPage/MoviesAndSeriesPageHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../ReduxSystem/AllMoviesSlice";

function MoviesPage({ reRenderMoviesPage, setReRenderMoviesPage }) {
  const { MoviesPageNum } = useSelector((state) => state.PageMoviesNumperSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies(MoviesPageNum));
    window.scroll(0, 0);
  }, [reRenderMoviesPage]);
  return (
    <div className="bg-black  min-h-screen ">
      <MoviesAndSeriesPageHeader PageName={"movies"} />
      <AllMoviesOrSeriesComp moviesOrSeries={"movies"} />
      <PaginationComp
        PageName={"movies"}
        MoviesPageNum={MoviesPageNum}
        reRenderMoviesPage={reRenderMoviesPage}
        setReRenderMoviesPage={setReRenderMoviesPage}
      />
    </div>
  );
}

export default MoviesPage;

import React, { useEffect, useState } from "react";
import MoviesAndSeriesPageHeader from "../../components/MoviesAndSeriesPage/MoviesAndSeriesPageHeader";
import AllMoviesOrSeriesComp from "../../components/MoviesAndSeriesPage/AllMoviesOrSeriesComp";
import PaginationComp from "../../components/MoviesAndSeriesPage/PaginationComp";
import { useDispatch, useSelector } from "react-redux";
import { getAllSeries } from "../../ReduxSystem/AllSeriesSlice";

function SeriesPage({ reRenderSeriesPage, setReRenderSeriesPage }) {
  const { SeriesPageNum } = useSelector((state) => state.PageSeriesNumperSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSeries(SeriesPageNum));

    window.scroll(0, 0);
  }, [reRenderSeriesPage]);
  return (
    <div className="bg-black  min-h-screen ">
      <MoviesAndSeriesPageHeader PageName={"series"} />
      <AllMoviesOrSeriesComp moviesOrSeries={"series"} />
      <PaginationComp
        reRenderSeriesPage={reRenderSeriesPage}
        setReRenderSeriesPage={setReRenderSeriesPage}
      />
    </div>
  );
}

export default SeriesPage;

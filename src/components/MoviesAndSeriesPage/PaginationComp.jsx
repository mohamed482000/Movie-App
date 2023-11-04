import React from "react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decreamentNum,
  increaseNum,
  setSeriesPageNum,
} from "../../ReduxSystem/PageSeriesNumperSlice";
import {
  decreamentMoviesPageNum,
  increaseMoviesPageNum,
  setMoviesPageNum,
} from "../../ReduxSystem/PageMoviesNumperSlice";

function PaginationComp({
  PageName,
  reRenderMoviesPage,
  setReRenderMoviesPage,
  reRenderSeriesPage,
  setReRenderSeriesPage,
}) {
  const dispatch = useDispatch();
  const { SeriesPageNum } = useSelector((state) => state.PageSeriesNumperSlice);
  const { MoviesPageNum } = useSelector((state) => state.PageMoviesNumperSlice);

  const next = () => {
    if (PageName === "movies") {
      if (MoviesPageNum < 100) {
        dispatch(increaseMoviesPageNum());
        setReRenderMoviesPage(!reRenderMoviesPage);
      }
    } else {
      if (SeriesPageNum < 100) {
        dispatch(increaseNum());
        setReRenderSeriesPage(!reRenderSeriesPage);
      }
    }
  };

  const prev = () => {
    if (PageName === "movies") {
      if (MoviesPageNum > 1) {
        dispatch(decreamentMoviesPageNum());
        setReRenderMoviesPage(!reRenderMoviesPage);
      }
    } else {
      if (SeriesPageNum > 1) {
        dispatch(decreamentNum());
        setReRenderSeriesPage(!reRenderSeriesPage);
      }
    }
  };
  const firstPage = () => {
    if (PageName === "movies") {
      if (MoviesPageNum > 1) {
        dispatch(setMoviesPageNum(1));
        setReRenderMoviesPage(!reRenderMoviesPage);
      }
    } else {
      if (SeriesPageNum > 1) {
        dispatch(setSeriesPageNum(1));
        setReRenderSeriesPage(!reRenderSeriesPage);
      }
    }
  };
  const lastPage = () => {
    if (PageName === "movies") {
      if (MoviesPageNum < 100) {
        dispatch(setMoviesPageNum(100));
        setReRenderMoviesPage(!reRenderMoviesPage);
      }
    } else {
      if (SeriesPageNum < 100) {
        dispatch(setSeriesPageNum(100));
        setReRenderSeriesPage(!reRenderSeriesPage);
      }
    }
  };
  return (
    <ButtonGroup variant="gradient" className="justify-center pb-10 text-white">
      <IconButton onClick={firstPage}>
        <MdKeyboardDoubleArrowLeft title="first page" className="h-4 w-4" />
      </IconButton>
      <IconButton onClick={prev}>
        <MdKeyboardArrowLeft className="h-4 w-4" />
      </IconButton>
      <IconButton>
        {PageName === "movies" ? MoviesPageNum : SeriesPageNum}
      </IconButton>

      <IconButton onClick={next}>
        <MdKeyboardArrowRight className="h-4 w-4" />
      </IconButton>
      <IconButton onClick={lastPage}>
        <MdKeyboardDoubleArrowRight title="last page" className="h-4 w-4" />
      </IconButton>
    </ButtonGroup>
  );
}

export default PaginationComp;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import { getTopSeriesData } from "../../ReduxSystem/TopSeriesSlice";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function SeriesCarousel() {
  const { topSeries, topSeriesLoading, topSeriesError } = useSelector(
    (state) => state.TopSeriesSlice
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopSeriesData());
  }, []);
  return (
    <div
      className="my-10 slider-wrapper min-w-full"
      style={{ minHeight: " 300px" }}
    >
      <h2
        className="pl-3 uppercase text-2xl mb-10 font-bold"
        style={{ color: "#00FFFF" }}
      >
        series
      </h2>

      {topSeriesLoading === true && topSeriesError === null ? (
        <LoadingComponent />
      ) : (
        <Slider
          className="flex justify-between items-center  pl-2"
          style={{ margin: "auto" }}
          {...settings}
        >
          {topSeries.map((sri, i) => (
            <Link key={sri.id} to={`/seriedetails/${sri.id}`}>
              <div className="cursor-pointer " style={{ height: "415px" }}>
                <img
                  src={`https://www.themoviedb.org//t/p/w220_and_h330_face${sri.poster_path}`}
                  alt="series img"
                  className="h-100 "
                  style={{ width: "100%" }}
                />
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default SeriesCarousel;

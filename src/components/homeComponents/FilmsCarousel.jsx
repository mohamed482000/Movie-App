import React, { useEffect } from "react";
import { getMoviesData } from "../../ReduxSystem/TopMoviesCarouselSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function FilmsCarousel() {
  const { movies, allMoviesLoading, allMoviesError } = useSelector(
    (state) => state.TopMoviesCarouselSlice
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
    dispatch(getMoviesData());
  }, []);
  return (
    <div
      className="slider-wrapper my-10  min-w-full"
      style={{ minHeight: " 300px" }}
    >
      <h2
        className=" pl-3 uppercase text-2xl mb-10 font-bold"
        style={{ color: "#00FFFF" }}
      >
        movies
      </h2>
      {allMoviesLoading === true && allMoviesError === null ? (
        <LoadingComponent />
      ) : (
        <Slider
          className="flex justify-between items-center pl-2 "
          style={{ margin: "auto" }}
          {...settings}
        >
          {movies.map((mov, i) => (
            <Link key={i} to={`/moviedetails/${mov.id}`}>
              <div className="cursor-pointer" style={{ height: "415px" }}>
                <img
                  src={`https://www.themoviedb.org//t/p/w220_and_h330_face${mov.poster_path}`}
                  className="h-100 "
                  alt="movie img"
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

export default FilmsCarousel;

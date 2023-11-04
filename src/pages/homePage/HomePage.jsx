import React, { useEffect, useState } from "react";
import "./homePage.css";
import HomeHeader from "../../components/homeComponents/HomeHeader";
import FilmsCarousel from "../../components/homeComponents/FilmsCarousel";
import SeriesCarousel from "../../components/homeComponents/SeriesCarousel";
import TopMoviesComp from "../../components/homeComponents/TopMoviesComp";
function HomePage({ handleMovieDetails }) {
  const [screnWidth, setScrenWidth] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 718) {
      setScrenWidth(true);
    }
    return;
  }, []);

  return (
    <div className="bg-black px-14 " style={{ minHeight: "200vh" }}>
      <div className="container flex flex-col items-center ">
        <HomeHeader />
        <FilmsCarousel handleMovieDetails={handleMovieDetails} />
        <SeriesCarousel handleMovieDetails={handleMovieDetails} />
        <TopMoviesComp
          handleMovieDetails={handleMovieDetails}
          screnWidth={screnWidth}
        />
      </div>
    </div>
  );
}

export default HomePage;

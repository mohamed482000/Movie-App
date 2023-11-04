import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/noimage_person.png";
import { useSelector } from "react-redux";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

function MovieCastDetails() {
  const { castMovies, actorMoviesLoading, actorMoviesError } = useSelector(
    (state) => state.ActorMoviesSlice
  );

  const [shadowNum, setShadowNum] = useState(100);
  const [shadowNum2, setShadowNum2] = useState(0);
  const [shadowNum3, setShadowNum3] = useState(30);
  const [shadowNum4, setShadowNum4] = useState(3);

  const [divScrollLeft, setDivScrollLeft] = useState(0);

  const refDiv = useRef();

  const handleScroll = () => {
    setDivScrollLeft(refDiv.current.scrollLeft);
    if (
      refDiv.current.scrollLeft < 13 &&
      refDiv.current.scrollLeft > divScrollLeft &&
      shadowNum > 0
    ) {
      setShadowNum3(shadowNum3 - 10);
      setShadowNum2(shadowNum2 + 15);
      setShadowNum4(shadowNum4 - 1);
    } else if (refDiv.current.scrollLeft > 15) {
      setShadowNum(0);
    } else if (refDiv.current.scrollLeft < 10) {
      setShadowNum(100);
      setShadowNum2(0);
      setShadowNum3(30);
      setShadowNum4(3);
    }
  };

  return (
    <div className="second-mov-or-ser-section px-14 pt-10 ">
      <h2
        className=" capitalize text-2xl mb-4 font-bold"
        style={{ color: "#0DCAF0" }}
      >
        top billed cast
      </h2>
      <div
        onScroll={handleScroll}
        ref={refDiv}
        className="top-cast-section rounded relative  "
        style={{ overflowX: castMovies.length > 4 && "scroll" }}
      >
        <div
          style={{
            width: `${shadowNum}px`,
            right: `-${shadowNum2}px`,
            boxShadow: `inset -${shadowNum4}em 0px ${shadowNum3}px black`,
          }}
          className="overlay-top-person "
        ></div>

        <div className="flex all-top-person">
          {
            (actorMoviesLoading === false,
            actorMoviesError === null ? (
              castMovies.map((mov) => (
                <div
                  key={mov.id}
                  className="every-person-in-cast inline-block mr-4"
                >
                  <div className="every-person-in-cast-img ">
                    <img
                      src={
                        mov.profile_path !== null
                          ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${mov.profile_path}`
                          : img
                      }
                      className="w-full h-full rounded-t"
                      alt="actor img"
                    />
                  </div>
                  <div className="every-person-in-cast-info capitalize  text-white pt-2 pl-3">
                    <h2 className="h-14 text-xl mb-2">{mov.original_name}</h2>
                    <h2 className=" text-base">{mov.character}</h2>
                  </div>
                </div>
              ))
            ) : (
              <LoadingComponent />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default MovieCastDetails;

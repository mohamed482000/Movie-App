import React from "react";
import { AiFillFileAdd, AiOutlineStar, AiFillPlayCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

function MovieCasting() {
  const { castMovies, crewMovies, actorMoviesLoading, actorMoviesError } =
    useSelector((state) => state.ActorMoviesSlice);

  return (
    <div>
      {actorMoviesLoading === false && actorMoviesError === null ? (
        <div className="casting">
          <span
            className="text-3xl font-bold my-1 mr-2"
            style={{ color: "#1BD5FC" }}
          >
            casting :
          </span>
          <div className="people ">
            <div
              className="acting-people flex justify-around  m-auto"
              style={{ width: "75%" }}
            >
              {castMovies.length > 0 ? (
                <div className="frist-person flex flex-col items-center capitalize">
                  <span className="text-xl">{castMovies[1].name}</span>
                  <span className=" text-lg text-yellow-500">
                    {castMovies[1].known_for_department}
                  </span>
                </div>
              ) : (
                <span className=" text-lg text-yellow-500">Acting</span>
              )}

              <h2 className="text-2xl">||</h2>
              {castMovies.length > 1 ? (
                <div className="second-person flex flex-col items-center capitalize">
                  <span className=" text-xl">{castMovies[2].name}</span>
                  <span className=" text-lg text-yellow-500">
                    {castMovies[2].known_for_department}
                  </span>
                </div>
              ) : (
                <span className=" text-lg text-yellow-500">Acting</span>
              )}
            </div>
            <div
              className="acting-people  flex justify-around mt-3 m-auto"
              style={{ width: "85%" }}
            >
              {crewMovies.length > 0 ? (
                <div className="frist-person  flex flex-col items-center capitalize">
                  <span className=" text-xl">{crewMovies[1].name}</span>
                  <span className=" text-lg text-yellow-500">
                    {crewMovies[1].known_for_department}
                  </span>
                </div>
              ) : (
                <span className=" text-lg text-yellow-500">Production</span>
              )}

              <h2 className="text-2xl">||</h2>
              {crewMovies.length > 1 ? (
                <div className="second-person flex flex-col items-center capitalize">
                  <span className=" text-xl">{crewMovies[2].name}</span>
                  <span className=" text-lg text-yellow-500">
                    {crewMovies[2].known_for_department}
                  </span>
                </div>
              ) : (
                <span className=" text-lg text-yellow-500">Directing</span>
              )}

              <h2 className="text-2xl">||</h2>
              {crewMovies.length > 2 ? (
                <div className="third-person flex flex-col items-center capitalize">
                  <span className=" text-xl">{crewMovies[3].name}</span>
                  <span className=" text-lg text-yellow-500">
                    {crewMovies[3].known_for_department}
                  </span>
                </div>
              ) : (
                <span className=" text-lg text-yellow-500">Production</span>
              )}
            </div>
            <div className="buttons ml-24 flex  mt-4 ">
              <div className="cursor-pointer flex flex-col items-center capitalize">
                <span className="  text-xl text-green-500">
                  <AiFillFileAdd />
                </span>
                <span className=" capitalize text-lg">addTo whatchList</span>
              </div>

              <div className="cursor-pointer  flex flex-col items-center capitalize">
                <span className="text-yellow-500 text-xl">
                  <AiOutlineStar />
                </span>
                <span className=" text-lg">rate movie</span>
              </div>

              <div className="cursor-pointer flex flex-col items-center capitalize">
                <span className="text-red-500 text-2xl">
                  <AiFillPlayCircle />
                </span>
                <span className=" text-lg ">play traller</span>
              </div>
            </div>
            <button
              onClick={() => window.history.back()}
              className="flex justify-center m-auto mt-2  p-2 border-2 rounded text-sm  border-blue-500 text-blue-500 capitalize"
            >
              back a step
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MovieCasting;

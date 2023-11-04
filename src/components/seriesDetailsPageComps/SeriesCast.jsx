import React from "react";
import { useSelector } from "react-redux";
import { AiFillFileAdd, AiOutlineStar, AiFillPlayCircle } from "react-icons/ai";

function SeriesCast() {
  const { castSeries, crewSeries, actorSeriesLoading, actorSeriesError } =
    useSelector((state) => state.ActorForSeriesSlice);
  return (
    <div>
      {actorSeriesLoading === false && actorSeriesError === null && (
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
              {castSeries.length > 0 ? (
                <div className="frist-person flex flex-col items-center capitalize ">
                  <span className=" text-xl">{castSeries[0].name}</span>
                  <span className=" text-lg text-yellow-500">
                    {castSeries[0].known_for_department}
                  </span>
                </div>
              ) : (
                <span className=" text-lg text-yellow-500">Acting</span>
              )}
              <h2 className="text-2xl">||</h2>
              {castSeries.length > 1 ? (
                <div className="second-person flex flex-col items-center capitalize">
                  <span className=" text-xl">{castSeries[1].name}</span>
                  <span className=" text-lg text-yellow-500">
                    {castSeries[1].known_for_department}
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
              {crewSeries.length > 0 ? (
                <div className="frist-person  flex flex-col items-center capitalize">
                  <span className=" text-xl">{crewSeries[0].name}</span>
                  <span className=" text-lg text-yellow-500">
                    {crewSeries[0].known_for_department}
                  </span>
                </div>
              ) : (
                <span className=" text-lg text-yellow-500">Production</span>
              )}

              <h2 className="text-2xl">||</h2>
              {crewSeries.length > 1 ? (
                <div className="second-person flex flex-col items-center capitalize">
                  <span className=" text-xl">{crewSeries[1].name}</span>
                  <span className=" text-lg text-yellow-500">
                    {crewSeries[1].known_for_department}
                  </span>
                </div>
              ) : (
                <span className=" text-lg text-yellow-500">Directing</span>
              )}

              <h2 className="text-2xl">||</h2>
              {crewSeries.length > 2 ? (
                <div className="third-person flex flex-col items-center capitalize">
                  <span className=" text-xl">{crewSeries[2].name}</span>
                  <span className=" text-lg text-yellow-500">
                    {crewSeries[2].known_for_department}
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
      )}
    </div>
  );
}

export default SeriesCast;

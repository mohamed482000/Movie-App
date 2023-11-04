import React from "react";

function MovieAndSerieHeader({ movOrSer }) {
  return (
    <div
      className="absolute left-1/2 top-6 m-auto w-max capitalize text-3xl "
      style={{
        color: "#1BD5FC",
        transform: "translate(-50% , 0)",
      }}
    >
      <h2>{movOrSer}-details</h2>
    </div>
  );
}

export default MovieAndSerieHeader;

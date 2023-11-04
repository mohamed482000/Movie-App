import React from "react";
import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs";
function StarsRateComp({ rating }) {
  return (
    <div className=" flex justify-center">
      {rating >= 2 ? (
        <BsFillStarFill style={{ color: "yellow", marginRight: "4px" }} />
      ) : rating >= 1 ? (
        <BsStarHalf style={{ color: "yellow", marginRight: "4px" }} />
      ) : (
        <BsStar style={{ color: "yellow", marginRight: "4px" }} />
      )}
      {rating >= 4 ? (
        <BsFillStarFill style={{ color: "yellow", marginRight: "4px" }} />
      ) : rating >= 3 ? (
        <BsStarHalf style={{ color: "yellow", marginRight: "4px" }} />
      ) : (
        <BsStar style={{ color: "yellow", marginRight: "4px" }} />
      )}
      {rating >= 6 ? (
        <BsFillStarFill style={{ color: "yellow", marginRight: "4px" }} />
      ) : rating >= 5 ? (
        <BsStarHalf style={{ color: "yellow", marginRight: "4px" }} />
      ) : (
        <BsStar style={{ color: "yellow", marginRight: "4px" }} />
      )}
      {rating >= 8 ? (
        <BsFillStarFill style={{ color: "yellow", marginRight: "4px" }} />
      ) : rating >= 7 ? (
        <BsStarHalf style={{ color: "yellow", marginRight: "4px" }} />
      ) : (
        <BsStar style={{ color: "yellow", marginRight: "4px" }} />
      )}
      {rating >= 10 ? (
        <BsFillStarFill style={{ color: "yellow", marginRight: "4px" }} />
      ) : rating >= 9 ? (
        <BsStarHalf style={{ color: "yellow", marginRight: "4px" }} />
      ) : (
        <BsStar style={{ color: "yellow", marginRight: "4px" }} />
      )}
    </div>
  );
}

export default StarsRateComp;

import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";

function MoreInfoMovie({ movieDetails }) {
  return (
    <div className="movie-Series-information py-20">
      <div
        className="flex movie-Series-social-media text-3xl "
        style={{ color: "#0DCAF0" }}
      >
        <a href="#">
          <BsFacebook />
        </a>
        <a href="#">
          <BsTwitter />
        </a>
        <a href="#">
          <BsInstagram />
        </a>
        <a href="#">
          <BiHomeAlt />
        </a>
      </div>
      <div className="movie-Series-more-information mt-12 text-white">
        <h3 className="text-xl mb-2 capitalize">status</h3>
        <h3 className="text-base mb-6" style={{ color: "#0DCAF0" }}>
          {movieDetails.status !== "" ? movieDetails.status : "-"}
        </h3>
        <h3 className="text-xl mb-2 capitalize">original language</h3>
        <h3 className="text-base mb-6 uppercase" style={{ color: "#0DCAF0" }}>
          {movieDetails.original_language !== ""
            ? movieDetails.original_language
            : "-"}
        </h3>
        <h3 className="text-xl mb-2 capitalize">budget</h3>
        <h3 className="text-base mb-6" style={{ color: "#0DCAF0" }}>
          {movieDetails.budget !== "" ? movieDetails.budget : "-"}
        </h3>
        <h3 className="text-xl mb-2 capitalize">revenue</h3>
        <h3 className="text-base mb-6" style={{ color: "#0DCAF0" }}>
          {movieDetails.revenue !== "" ? movieDetails.revenue : "-"}
        </h3>
      </div>
    </div>
  );
}

export default MoreInfoMovie;

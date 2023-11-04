import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";

function MoreInfoSeries({ serieDetails }) {
  return (
    <div className="movie-Series-information py-20">
      <div
        className="flex movie-Series-social-media text-3xl "
        style={{ color: "#0DCAF0" }}
      >
        <a href="#" className="mr-12">
          <BsFacebook />
        </a>
        <a href="#" className="mr-12">
          <BsTwitter />
        </a>
        <a href="#" className="mr-12">
          <BsInstagram />
        </a>
        <a href="#" className="mr-12">
          <BiHomeAlt />
        </a>
      </div>
      <div className="movie-Series-more-information mt-12 text-white">
        <h3 className="text-xl mb-2 capitalize">status</h3>
        <h3 className="text-base mb-6" style={{ color: "#0DCAF0" }}>
          {serieDetails.status !== "" ? serieDetails.status : "-"}
        </h3>
        <h3 className="text-xl mb-2 capitalize">original language</h3>
        <h3 className="text-base mb-6 uppercase" style={{ color: "#0DCAF0" }}>
          {serieDetails.original_language !== ""
            ? serieDetails.original_language
            : "-"}
        </h3>
        <h3 className="text-xl mb-2 capitalize">number of seasons</h3>
        <h3 className="text-base mb-6" style={{ color: "#0DCAF0" }}>
          {serieDetails.number_of_seasons !== ""
            ? serieDetails.number_of_seasons
            : "_"}
        </h3>
        <h3 className="text-xl mb-2 capitalize">type</h3>
        <h3 className="text-base mb-6" style={{ color: "#0DCAF0" }}>
          {serieDetails.type !== "" ? serieDetails.type : "-"}
        </h3>
      </div>
    </div>
  );
}

export default MoreInfoSeries;

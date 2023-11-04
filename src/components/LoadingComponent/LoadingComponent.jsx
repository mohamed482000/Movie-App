import React from "react";
import "./loadingComponent.css";

function LoadingComponent() {
  return (
    <div
      className="justify-center flex items-center w-full "
      style={{ minHeight: " 300px" }}
    >
      <span className="loader"></span>
    </div>
  );
}

export default LoadingComponent;

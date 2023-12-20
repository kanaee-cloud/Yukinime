import React from "react";
import LoadingImg from "../assets/services.gif";

const Loading = () => {
  return (
    <div className="text-center">
      <h1 className="opacity-70 text-2xl font-semibold mb-6">
        Chotto matte...
      </h1>
      <img
        src={LoadingImg}
        alt="Loading"
        width={200}
        height={200}
        className="mx-auto"
      />
    </div>
  );
};

export default Loading;

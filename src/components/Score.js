import React from "react";

const Score = (props) => {
  return (
    <div className="flex-col px-14 py-4 font-semibold text-white">
      <div className="flex gap-3 mb-2">
        <h4>Score: </h4>
        <p>{props.current}</p>
      </div>
      <div className="flex gap-3">
        <h4>Best Score: </h4>
        <p>{props.max}</p>
      </div>
    </div>
  );
};

export default Score;
